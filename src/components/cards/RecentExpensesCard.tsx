import { dummyTransactions } from "../data/dummyTransactions";
import { Card } from "../shared/Card";
import { type Transaction } from "../types";

interface Props {
    transactions: Transaction[];
}

export const RecentExpensesCard = ({ transactions }: Props) => {
    const recentExpenses = [...transactions]
        .sort((a, b) => new Date(b.date).getTime - new Date(a.date).getTime()) // converts the string to a timestamp for comparison.
        .slice(0, 4); // Take top 4

    return (
        <Card title="Recent Expenses">
            <ul>
                {recentExpenses.map((txn, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{new Date(txn.date).toLocaleDateString()}</span> {/* .toLocaleDateString() formats the date nicely */}
                        <span>{txn.category}</span>
                        <span>£{txn.amount.toFixed(2)}</span> {/* ensures amounts always show 2 decimals. */}
                    </li>
                ))}
            </ul>
        </Card>
    )
}
