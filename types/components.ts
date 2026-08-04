import { Account } from "@/models/Account";

export interface IComponentProps {
    testID?: string;
}

export interface IAccountListProps extends IComponentProps {
    list: Account[];
    onRefresh: Promise<void>
}

export interface IAccountListItemProps extends IComponentProps {
    item: Account;
}

export interface IAccountDisplayProps extends IComponentProps {
    type: string;
    number: string;
}

export interface IAccountCardProps extends IComponentProps {
    account: Account;
}