import DashboardLayout from './components/layout/DashboardLayout';
import './App.css';
import './index.css';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    

    return (
        <main className='min-h-screen flex items-center justify-center p-6'>

            {/* Full width wrapper to center content */}
            <div className='w-full flex justify-center'>

                {/* Parent flex container for dashboard + sidebar */}
                <div className='w-full h-full flex justify-center gap-3' style={{ maxWidth: '2080px', width: '100%' }}>

                    {/* Sidebar */}
                    <Sidebar 
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />

                    {/* Dashboard */}
                    <div 
                        className='rounded-lg p-6 shadow-lg transition-all duration-300 flex-1 h-full flex flex-col' 
                        style={{ 
                            backgroundColor: "var(--container)",
                            minWidth: '300px',
                            width: '100%'
                        }}>
                        <Header 
                            isSidebarOpen={isSidebarOpen}
                            setIsSidebarOpen={setIsSidebarOpen}
                            setCsvData={setTransactions}
                        />
                        <div className='flex-1'>
                            <DashboardLayout 
                                transactions={transactions}
                            />
                        </div>
                    </div>
                </div>   
            </div>
            
        </main>
    )
}

export default App;