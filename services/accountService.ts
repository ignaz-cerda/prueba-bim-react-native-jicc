import { axiosClient } from "@/api/api";
import { Account } from "@/models/Account";

export const getAccounts = async (): Promise<Account[]> => {
    const response = await axiosClient.get<Account[]>('/accounts');
    return response.data;
};