import { Menu, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Header = () => {
    // State variable to track the current mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

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

    return (
        <header className="flex justify-between align-center mb-5">
            <Menu type="button" className="text-2xl"></Menu>
            <h1 className="text-2xl">My Finance Dashboard</h1>
            <button onClick={toggleMode}>
                {isDarkMode ? (
                    <Moon className="text-2xl"></Moon>
                ) : (
                    <Sun type="button"  className="text-2xl"></Sun>
                )}
            </button>
            
            
        </header>
    )
}