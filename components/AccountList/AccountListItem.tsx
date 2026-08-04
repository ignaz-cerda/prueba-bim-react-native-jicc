
import { IAccountListItemProps } from "@/types";
import { toCurrency } from "@/utils/currency";
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import React, { useMemo } from "react";
import { Text, TouchableOpacity } from 'react-native';
import { AccountDisplay } from "../ui/Account/AccountDisplay";
import { itemStyles } from "./styles";

export const AccountListItem: React.FC<IAccountListItemProps> = ({ item }) => {
    const navigator = useNavigation();
    const balance = useMemo(() => {
        return toCurrency(item.balance);
    }, [item.balance]);

    const onPressHandler = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch();
        // @ts-expect-error 'err'
        navigator.navigate('AccountDetail', { account: item });
    };
    return (
        <TouchableOpacity style={itemStyles.root} onPress={onPressHandler} activeOpacity={0.5}>
            <Text>{item.id}</Text>
            <AccountDisplay type={item.type} number={item.number} />
            <Text>{balance}</Text>
        </TouchableOpacity>
    );
};