import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card } from "../shared/Card";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57', '#a28dd1'];

const data = [
    { name: 'Groceries', value: 300 },
    { name: 'Transport', value: 100 },
    { name: 'Bills', value: 600 },
    { name: 'Eating Out', value: 200 },
    { name: 'Other', value: 150 },
    { name: 'Entertainment', value: 50 },
    { name: 'Treating myself', value: 60 },
];

export const CategoryPieChartCard = () => {
    return (
        <Card title="Overall expenses by category">
            <div className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {data.map((_, index) => (
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