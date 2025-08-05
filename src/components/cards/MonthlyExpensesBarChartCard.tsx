import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Card } from "../shared/Card";

// Mock data representing expenses each month
const data = [
    { month: 'Jan', amount: 500},
    { month: 'Feb', amount: 100},
    { month: 'Mar', amount: 250},
    { month: 'Apr', amount: 400},
    { month: 'May', amount: 450},
    { month: 'Jun', amount: 340},
    { month: 'Jul', amount: 230},
    { month: 'Aug', amount: 100},
    { month: 'Sept', amount: 50},
    { month: 'Oct', amount: 1000},
    { month: 'Nov', amount: 2500},
    { month: 'Dec', amount: 300},
]

export const MonthlyExpensesBarChartCard = () => {
    return (
        <Card title="Monthly Expenses">
            <div className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="month"/>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}