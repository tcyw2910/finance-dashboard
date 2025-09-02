import { Menu, Sun, Moon, Database } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImportCsvModal } from './modals/importCsvModal';
import { type Transaction } from './types';

interface HeaderProps {
    isSidebarOpen: boolean; 
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; // React.Dispatch:- a function that accepts the state action and updates state
    // “A function that can take either a new boolean value or a function returning a boolean, and will update the state accordingly.”
    setCsvData: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

export const Header = ({ isSidebarOpen, setIsSidebarOpen, setCsvData }: HeaderProps) => {
    // State variable to track the current mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);

    // Grab the current theme state
    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    // Toggle light/dark mode
    const toggleMode = () => {
        const root = document.documentElement;
        
        if (isDarkMode) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setIsDarkMode(!isDarkMode);
    };

    const handleCsvImport = (data: Transaction[]) => {
        setCsvData(data); // Store uploaded CSV data
        console.log("CSV DATA", data); 
    }
    return (
        <header className="flex justify-between items-center mb-5 relative">
            {/* Left: Menu + dropdown */}
            <div className='flex flex-row gap-5'>
                {/* Toggle menu */}
                <Menu 
                    type="button" 
                    className="text-2xl cursor-pointer" 
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                />
                {/* Import data button */}
                <Database 
                    onClick={() => setIsImportModalOpen(true)}
                />
            </div>

            {/* Center: Dashboard Title */}
            <h1 className="text-2xl">My Finance Dashboard</h1>

            {/* Right: Dark mode toggle */}
            <button onClick={toggleMode}>
                {isDarkMode ? (
                    <Moon className="text-2xl" />
                ) : (
                    <Sun type="button"  className="text-2xl" />
                )}
            </button>

            {/* Import CSV Modal */}
            <ImportCsvModal 
                isOpen={isImportModalOpen}
                onClose={() => setIsImportModalOpen(false)}
                onDataUpload={handleCsvImport}
            />
        </header>
    )
}