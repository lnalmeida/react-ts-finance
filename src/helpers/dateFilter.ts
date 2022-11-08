import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filterListByMonth = (list:Item[], date:string): Item[] => {
    const listPerMonth: Item[] = [];
    let [year, month] = date.split('-');
    
    for(let i in list) {
        if(
            (list[i].data.getFullYear() === parseInt(year)) && 
            ((list[i].data.getMonth() + 1) === parseInt(month))) 
        {
            listPerMonth.push(list[i])
        }
    }
    return listPerMonth;
};

export const formatDate = (date:Date): string => {
    let year: string = date.getFullYear().toString();
    let month: string = (date.getMonth() + 1).toString();
    let day: string = date.getDate().toString();
    let formatedDate = `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
    return formatedDate;
};

const addZeroToDate = (n: string) => (Number(n) < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let [year, month] = currentMonth.split('-');
    let monthAsNumber = Number(month) - 1;
    let monthAsText = '';

    for (let i = 0; i < months.length; i++){
        if(monthAsNumber === i) monthAsText =  months[i];
    }

    return `${monthAsText}/${year}`;
}

export const newDateAdjusted = (dataField: string) => {
    let [year, month, day] = dataField.split('-');
    return new Date(parseInt(year), parseInt(month) -1, parseInt(day))
}

