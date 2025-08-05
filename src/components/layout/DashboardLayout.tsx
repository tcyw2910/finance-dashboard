import { RecentExpensesCard } from '../cards/RecentExpensesCard';
import { CategoryPieChartCard } from '../cards/CategoryPieChartCard';
import { MonthlyExpensesBarChartCard } from '../cards/MonthlyExpensesBarChartCard';

const DashboardLayout = () => (
    <div className='grid grid-cols-3 gap-6'>
        <RecentExpensesCard /> 
        <CategoryPieChartCard /> 
        <MonthlyExpensesBarChartCard />
        
    </div>
)

export default DashboardLayout;