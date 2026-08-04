import { AccountListItem } from "@/components/AccountList/AccountListItem";
import { useAccounts } from "@/hooks/useAccounts";
import { Account } from "@/models/Account";
import { IComponentProps } from "@/types";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";

export const AccountsScreen: React.FC<IComponentProps> = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [isReady, setIsReady] = useState<boolean>(false);
    const { isLoading, loadAccounts } = useAccounts();


    const onRefreshHandler = async () => {
        const data = await loadAccounts();
        setAccounts(data);
    };

    const refreshControl = (
        <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefreshHandler}
        />
    );

    const renderEventItem = (itemData: { item: Account }) => <AccountListItem item={itemData.item} />;

    useEffect(() => {
        const loadInitial = async () => {
            const data = await loadAccounts();
            setAccounts(data);
            setIsReady(true);
        };

        loadInitial().catch();
    }, []);

    if (!isReady) {
        return <ActivityIndicator color={'#0026ff'} />
    }

    return (
        <FlatList
            data={accounts}
            renderItem={renderEventItem}
            keyExtractor={(item: Account) => item.id.toString()}
            refreshControl={refreshControl}
        />);
};