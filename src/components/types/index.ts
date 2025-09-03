// Transaction, Debt, Category types

export interface Transaction {
    id: string;
    date: string;
    amount: number;
    category: string;
    type: 'income' | 'expense';
    description?: string;
    from?: string;
    to?: string;
}

export type Debt = {
    id: string;
    name: string;
    amount: number;
    description: string;
    type: 'creditor' | 'debtor';
}

