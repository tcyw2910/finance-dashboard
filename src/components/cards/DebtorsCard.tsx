import { useState } from "react";
import { Card } from "../shared/Card";
import { CirclePlus, Check } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";
import { getDebts, saveDebts } from "../storage/debtStorage";
import { type Debt } from "../types";

const data = [
    { name: "Gordon", amount: 10},
    { name: "Viktorija", amount: 90},
];


export const DebtorsCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [debts, setDebts] = useState<Debt[]>(getDebts());

    const handleSave = (newDebt: { name: string, amount: number }) => {
        const debt: Debt = { 
            id: crypto.randomUUID(), 
            type: 'debtor',
            ...newDebt
        };
        const updated = [...debts, debt];
        setDebts(updated);
        saveDebts(updated) // Call storage helper here
        setIsModalOpen(false);
        console.log("Debt saved");
    }

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
                {debts.map((item) => (
                    <li key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                        <Check size={16} />
                    </li>
                ))}
            </ul>

            {isModalOpen && (
                <AddDebtCreditorModal 
                    type="debtor"
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </Card>
    )
}