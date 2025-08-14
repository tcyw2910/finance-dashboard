import { RecentExpensesCard } from '../cards/RecentExpensesCard';
import { CategoryPieChartCard } from '../cards/CategoryPieChartCard';
import { MonthlyExpensesBarChartCard } from '../cards/MonthlyExpensesBarChartCard';
import { CreditorsCard } from '../cards/CreditorsCard';
import { DebtorsCard } from '../cards/DebtorsCard';


const DashboardLayout = () => {
    

    return (
        <div className='flex'>            
            {/* Main dashboard content */}
            <div className='flex-1'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div>
                        <RecentExpensesCard /> 
                    </div>
                    
                    <div>
                        <CreditorsCard />
                    </div>
                    
                    <div>
                        <DebtorsCard /> 
                    </div>
                    
                    <div className='lg:col-span-1'>
                        <CategoryPieChartCard /> 
                    </div>
                    
                    <div className='lg:col-span-2'>
                        <MonthlyExpensesBarChartCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;