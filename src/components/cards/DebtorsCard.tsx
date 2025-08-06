import { Card } from "../shared/Card";

const data = [
    { name: "Gordon", amount: 10},
    { name: "Viktorija", amount: 90},
];


export const DebtorsCard = () => {
    return (
        <Card title="People Owe Me">
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                        <button>Paid</button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}