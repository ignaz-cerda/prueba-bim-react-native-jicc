import { IAccountDisplayProps } from "@/types";
import React from "react";
import { Text, View } from "react-native";



export const AccountDisplay: React.FC<IAccountDisplayProps> = ({ type, number }) => {
    return (
        <View>
            <Text>{type}</Text>
            <Text>{number}</Text>
        </View>
    );
};