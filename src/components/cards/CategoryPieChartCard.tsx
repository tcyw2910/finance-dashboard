import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card } from "../shared/Card";
import { type Transaction } from "../types";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57', '#a28dd1'];

interface Props {
    transactions: Transaction[];
}

export const CategoryPieChartCard = ({ transactions }: Props) => {

    // Aggregate amounts by category - array.reduce((accumulator, currentValue) => {...}, initialValue);
    const categoryData = transactions.reduce((acc: Record<string, number>, t) => {
        if (!acc[t.category]) acc[t.category] = 0;
        acc[t.category] += t.amount;
        return acc;
    }, {});

    // Convert to array for PieChart
    const pieData = Object.entries(categoryData).map(([name, value]) => ({ name, value })).filter(d => d.value > 0);


    return (
        <Card title="Overall expenses by category">
            <div className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};