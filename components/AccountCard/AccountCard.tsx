import { IAccountCardProps } from "@/types";
import { toCurrency } from "@/utils/currency";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { cardStyles } from "./styles";

export const AccountCard: React.FC<IAccountCardProps> = ({ account }) => {
    const balance = useMemo(() => {
        return toCurrency(account.balance);
    }, [account.balance]);

    return (
        <View style={cardStyles.root}>
            <View style={[cardStyles.row, cardStyles.rowStrip]}>
                <Text>ID</Text>
                <Text>{account.id.toString()}</Text>
            </View>
            <View style={[cardStyles.row, cardStyles.rowStrip]}>
                <Text>Type</Text>
                <Text>{account.type}</Text>
            </View>
            <View style={[cardStyles.row, cardStyles.rowStrip]}>
                <Text>Number</Text>
                <Text>{account.number}</Text>
            </View>
            <View style={[cardStyles.row, cardStyles.rowStrip]}>
                <Text>Balance</Text>
                <Text>{balance}</Text>
            </View>
        </View>
    );
};