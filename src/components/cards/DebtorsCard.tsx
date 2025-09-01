import { useState } from "react";
import { Card } from "../shared/Card";
import { CirclePlus, Check } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";
import { deleteDebt, getDebts, saveDebts } from "../storage/debtStorage";
import { type Debt } from "../types";

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
    }

    const handleDelete = (id: string) => {
        const updated = deleteDebt(id);
        setDebts(updated);
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
                {debts.length === 0 ? (
                    <li className="italic text-center text-gray-700">
                        No one owes you money yet.
                    </li>
                ) : (
                    debts.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <span>£{item.amount}</span>
                            <Check onClick={() => handleDelete(item.id)} size={16}/>
                        </li>
                    ))
                )}
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