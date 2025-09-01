import { Card } from "../shared/Card";
import { CirclePlus, Check } from "lucide-react";
import { AddDebtCreditorModal } from "../modals/AddDebtCreditorModal";
import { useState } from "react";
import { type Debt } from "../types";
import { getCreditors, saveCreditors} from "../storage/debtStorage";

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
                {creditors.map((item) => (
                    <li key={item.id} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.amount}</span>
                        <Check size={16}/>
                    </li>   
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
