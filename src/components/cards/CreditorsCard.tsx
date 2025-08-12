import { Card } from "../shared/Card";
import { CirclePlus } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";
import { useState } from "react";

const data = [
    { name: "Gordon", amount: 50},
    { name: "Viktorija", amount: 100},
    { name: "Wonwoo", amount: 250},
    { name: "Calvin", amount: 130},
];

export const CreditorsCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    return (
        <Card 
            title="People I Owe"
            extra={
                <CirclePlus size={16} onClick={() => setIsModalOpen(true)}/>
            }
        >
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                        <button>Paid</button>
                    </li>   
                ))}
            </ul>

            {isModalOpen && (
                <AddDebtCreditorModal 
                    type="creditor"
                    onClose={() => setIsModalOpen(false)}
                    onSave={() => {
                        setIsModalOpen(false)
                    }}
                />  
            )}
        </Card>
    )
}
