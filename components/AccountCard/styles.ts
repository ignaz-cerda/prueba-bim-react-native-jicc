import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        paddingVertical: 8,
        paddingHorizontal: 8,
        margin: 16,
        borderColor: '#0055ff',
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#0055ff22'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginVertical: 4,
    },
    rowStrip: {
        borderBottomColor: '#0055ff',
        borderBottomWidth: 1,
    },
});