import { Account } from "@/models/Account";
import { getAccounts } from "@/services/accountService";
import { useCallback, useState } from "react";

export const useAccounts = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const loadAccounts = useCallback(async (): Promise<Account[]> => {
        setIsLoading(true);
        const data = await getAccounts();
        setIsLoading(false);

        return data;
    }, [getAccounts]);

    return {
        isLoading,

        loadAccounts,
    };
};