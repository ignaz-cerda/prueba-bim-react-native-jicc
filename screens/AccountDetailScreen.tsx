import { AccountCard } from '@/components/AccountCard/AccountCard';
import { useRoute } from '@react-navigation/native';
import { Text, View } from "react-native";

export const AccountDetailScreen: React.FC = () => {
    const route = useRoute();
    // @ts-expect-error 'err'
    const account: Account = route.params?.account;

    return (
        <View>
            <Text>Account detail</Text>
            {account && <AccountCard account={account} />}
        </View>
    );
};