import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountDetailScreen, AccountsScreen } from "../screens/";

const Stack = createNativeStackNavigator();

export const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'AccountList'} component={AccountsScreen} />
            <Stack.Screen name={'AccountDetail'} component={AccountDetailScreen} />
        </Stack.Navigator>
    );
};