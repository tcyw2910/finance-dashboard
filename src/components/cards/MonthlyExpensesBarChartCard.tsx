import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Card } from "../shared/Card";
import { type Transaction } from "../types";

interface Props {
    transactions: Transaction[];
}

export const MonthlyExpensesBarChartCard = ({ transactions }: Props) => {
    
    // Initialise an object to store the monthly totals
    const monthlyTotals: Record<string, number> = {};

    // Loop through all transactions 
    transactions.forEach((t) => {
        const month = new Date(t.date).toLocaleString('default', { month: 'short' }); // convert date string into JS Date object & give 3-letter month abbreviation

        if (!monthlyTotals[month]) monthlyTotals[month] = 0;
        monthlyTotals[month] += t.amount;
    });

    // Convert object into an array for Recharts
    const barChartData = Object.entries(monthlyTotals).map(([month, amount]) => ({ month, amount }))
    
    return (
        <Card title="Monthly Expenses">
            <div className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="0" stroke="var(--text)"/> 
                        <XAxis dataKey="month" tick={{ fill: 'var(--text)' }} />
                        <YAxis tick={{ fill: 'var(--text)' }} />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}