import RecentExpensesCard from '../cards/RecentExpensesCard';

const DashboardLayout = () => (
    <div className='grid grid-cols-3 gap-6'>
        <RecentExpensesCard /> 
        {/* <DebtorsCard /> 
        <CreditorsCard /> 
        <MonthlyExpensesBarChartCard /> 
        <CategoryPieChartCard />  */}
    </div>
)

export default DashboardLayout;