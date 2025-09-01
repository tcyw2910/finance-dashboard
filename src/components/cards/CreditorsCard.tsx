import { Card } from "../shared/Card";
import { CirclePlus, Check } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";
import { useState } from "react";
import { type Debt } from "../types";
import { deleteCreditor, getCreditors, saveCreditors} from "../storage/debtStorage";

export const CreditorsCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [creditors, setCreditors] = useState<Debt[]>(getCreditors());

    const handleSave = (newCreditor: { name: string, amount: number }) => {
        const creditor: Debt = {
            id: crypto.randomUUID(),
            type: 'creditor',
            ...newCreditor
        };
        const updated = [...creditors, creditor];
        setCreditors(updated);
        saveCreditors(updated);
        setIsModalOpen(false);
    }

    const handleDelete = (id: string) => {
        const updated = deleteCreditor(id)
        setCreditors(updated);
    }

    return (
        <Card 
            title="People I Owe"
            extra={
                <CirclePlus 
                    size={16} 
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer hover:scale-125 duration-200 transition-transform"
                />
            }
        >
            <ul>
                {creditors.length === 0 ? (
                    <li className="italic text-center text-gray-700">
                        You owe no money to anyone right now. Well done.
                    </li>
                ) : (
                    creditors.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <span>£{item.amount}</span>
                            <Check onClick={() => handleDelete(item.id)} size={16}/>
                        </li>
                    )
                ))}
            </ul>

            {isModalOpen && (
                <AddDebtCreditorModal 
                    type="creditor"
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />  
            )}
        </Card>
    )
}
