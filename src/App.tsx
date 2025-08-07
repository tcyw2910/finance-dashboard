import DashboardLayout from './components/layout/DashboardLayout';
import './App.css';
import './index.css';
import { Header } from './components/Header';

function App() {
    return (
        <main className='min-h-screen flex flex-col items-center p-6'>
            <div className='w-full max-w-7xl rounded-lg p-6 shadow-lg' style={{ backgroundColor: "var(--container)"}}>
                <Header />
                <DashboardLayout />
            </div>
            
        </main>
    )
}

export default App;