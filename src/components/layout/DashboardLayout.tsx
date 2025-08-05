import { RecentExpensesCard } from '../cards/RecentExpensesCard';
import { CategoryPieChartCard } from '../cards/CategoryPieChartCard';

const DashboardLayout = () => (
    <div className='grid grid-cols-3 gap-6'>
        <RecentExpensesCard /> 
        <CategoryPieChartCard /> 
        {/* <DebtorsCard /> 
        <CreditorsCard /> 
        <MonthlyExpensesBarChartCard />  */}
        
    </div>
)

export default DashboardLayout;