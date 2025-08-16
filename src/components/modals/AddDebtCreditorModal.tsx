import React, { useState } from "react";
import { Modal } from "./Modal";

type AddDebtCreditorModalProps = {
    type: "creditor" | "debtor";
    onClose: () => void;
    onSave: (debt: { name: string; amount: number;}) => void;
};

export const AddDebtCreditorModal = ({ type, onClose, onSave }: AddDebtCreditorModalProps) => {
    // Keep track of name and amount being set by user 
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ name, amount: parseFloat(amount) });
    };

    return (
        <Modal onClose={onClose}>
            <h2 style={{color: "black"}} className="text-xl mb-3">
                Add {type === "debtor" ? "Debtor" : "Creditor"}
            </h2>

            <form onSubmit={handleSubmit}>
                <div style={{color: "black"}} className="flex flex-col">
                    <label>Name</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-lg w-50 mb-3"
                        required
                    />

                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border rounded-lg w-20"
                        required 
                    />
                </div>

                <div style={{color: "black"}} className="flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="bg-gray-300 p-1 rounded-lg">Cancel</button>
                    <button 
                        type="submit" 
                        className="bg-green-300 p-1 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    )
}