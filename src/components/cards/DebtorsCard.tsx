import { useState } from "react";
import { Card } from "../shared/Card";
import { CirclePlus } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";

const data = [
    { name: "Gordon", amount: 10},
    { name: "Viktorija", amount: 90},
];


export const DebtorsCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card 
            title="People Owe Me"
            extra={
                <CirclePlus 
                    size={16} 
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer hover:scale-125 duration-200 transition-transform"
                />       
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
                    type="debtor"
                    onClose={() => setIsModalOpen(false)}
                    onSave={(newDebt) => {
                        console.log("New debtor added", newDebt)
                        setIsModalOpen(false);
                    }}
                />
            )}
        </Card>
    )
}