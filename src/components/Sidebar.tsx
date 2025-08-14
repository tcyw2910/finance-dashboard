import { ArrowLeftToLine } from "lucide-react";
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
// Function Declaration
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    
    return (
        <div 
            className={`fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg z-50 rounded-lg
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="flex justify-between items-center">
                <h2>Menu</h2>
                <ArrowLeftToLine
                    size={20} 
                    type="button" 
                    onClick={onClose}
                    className="text-black mr-1"
                >
                    Close
                </ArrowLeftToLine>
            </div>
            <nav className={`${isOpen ? 'flex flex-row space-y-3' : 'flex flex-col space-y-4 p-4'}`}>
                <button 
                    type="button" 
                    className="text-black"
                >
                    Day Trading
                </button>
            </nav>
            
        </div>
        
    )
}