import { dummyTransactions } from "../data/dummyTransactions";
import { Card } from "../shared/Card";

export const RecentExpensesCard = () => {
    const recentExpenses = dummyTransactions
        .filter(txn => txn.type === 'expense')
        .slice(0, 4);

    return (
        <Card title="Recent Expenses">
            <ul>
                {recentExpenses.map(txn => (
                    <li key={txn.id} className="flex justify-between">
                        <span>{txn.date}</span>
                        <span>{txn.category}</span>
                        <span>£{txn.amount}</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}
