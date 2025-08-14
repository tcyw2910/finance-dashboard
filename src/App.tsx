import DashboardLayout from './components/layout/DashboardLayout';
import './App.css';
import './index.css';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className='min-h-screen flex flex-col items-center p-6'>
            <div className='w-full max-w-7xl rounded-lg p-6 shadow-lg' style={{ backgroundColor: "var(--container)"}}>
                <Header 
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <DashboardLayout />
            </div>
            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />      
        </main>
    )
}

export default App;