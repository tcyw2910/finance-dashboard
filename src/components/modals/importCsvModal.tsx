import { useState } from "react";
import Papa from "papaparse";
import { Modal } from "./Modal";
import { type Transaction } from "../types";

interface ImportCsvModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDataUpload: (data: Transaction[]) => void; // Callback to send parsed CSV data
}

export const ImportCsvModal = ({ isOpen, onClose, onDataUpload }: ImportCsvModalProps) => {
    const [fileName, setFileName] = useState<string>("");

    const handleCsvImport = (file: File) => {
        setFileName(file.name);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                // Clean up raw CSV into the defined Transaction type
                const cleanedData: Transaction[] = (results.data as any[]).map(row => ({
                    date: row["Date/Time of transaction"],
                    description: row.Description,
                    amount: parseFloat(row["Amount (GBP)"] ?? "0") || 0,
                    category: row.Category,
                }));

                // Send the cleaned data back to parent
                onDataUpload(cleanedData) 
                
                onClose(); // Close modal
            },
        });
    };

    

    if (!isOpen) return null; // Do not render anything if modal is closed

    return (
        <Modal onClose={onClose}>
            <h2 className="text-center text-xl font-semibold mb-3">Upload CSV File</h2>

            <input 
                type="file"
                accept=".csv"
                onChange={(e) => e.target.files && handleCsvImport(e.target.files[0])}
                className="bg-blue-300"
            />
            {fileName && <p>Selected file: {fileName}</p>}

            <div>
                <button 
                    onClick={onClose}
                    className="bg-red-300"
                >Cancel</button>
            </div>
        </Modal>
    )
}