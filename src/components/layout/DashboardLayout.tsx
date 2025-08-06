import { RecentExpensesCard } from '../cards/RecentExpensesCard';
import { CategoryPieChartCard } from '../cards/CategoryPieChartCard';
import { MonthlyExpensesBarChartCard } from '../cards/MonthlyExpensesBarChartCard';
import { CreditorsCard } from '../cards/CreditorsCard';
import { DebtorsCard } from '../cards/DebtorsCard';

const DashboardLayout = () => (
    <div className='grid grid-cols-3 gap-6'>
        <RecentExpensesCard /> 
        <CategoryPieChartCard /> 
        <MonthlyExpensesBarChartCard />
        <CreditorsCard />
        <DebtorsCard />
    </div>
)

export default DashboardLayout;