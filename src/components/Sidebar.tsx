import { ArrowLeftToLine } from "lucide-react";
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
// Function Declaration
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    
    return (
        <div 
            className={`flex-shrink-0 h-full bg-white shadow-lg rounded-lg transform transition-all duration-300 ease-in-out
                ${isOpen 
                    ? 'translate-x-0 opacity-100 pointer-events-auto' 
                    : '-translate-x-full opacity-0 pointer-events-none'
                }`}
                style={{ 
                    width: '16rem', 
                    maxWidth: '30%',
                    backgroundColor: "var(--container)" 
                }}
        >
            <div className="flex justify-between items-center">
                <ArrowLeftToLine
                    size={20} 
                    type="button" 
                    onClick={onClose}
                    className="text-black mr-1"
                >
                    Close
                </ArrowLeftToLine>
            </div>
            <nav className='flex flex-col space-y-4 p-4'>
                <button 
                    type="button" 
                >
                    Day Trading
                </button>
            </nav>
            
        </div>
        
    )
}