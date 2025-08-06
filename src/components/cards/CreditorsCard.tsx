import { Card } from "../shared/Card";

const data = [
    { name: "Gordon", amount: 50},
    { name: "Viktorija", amount: 100},
    { name: "Wonwoo", amount: 250},
    { name: "Calvin", amount: 130},
];

export const CreditorsCard = () => {
    return (
        <Card title="People I Owe">
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
