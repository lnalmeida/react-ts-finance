import * as C from './style';
import { formatCurrentMonth } from '../../helpers/dateFilter'
import ResumeItem from '../ResumeItem';


type InfoAreaProps ={
    currentMonth: string;
    incomes: number; 
    expenses: number;
    onMonthChange: (newMonth: string) => void;
}

const InfoArea = ({currentMonth, onMonthChange, incomes, expenses}:InfoAreaProps) => {

    const handlePreviousMonth = ()  => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = ()  => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={parseFloat(incomes.toFixed(2))}/>
                <ResumeItem title="Despesas" value={parseFloat(expenses.toFixed(2))}/>
                <ResumeItem 
                    title="Balanço" 
                    value={parseFloat((incomes-expenses).toFixed(2))}
                    color={incomes-expenses < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}

export default InfoArea;