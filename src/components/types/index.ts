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

