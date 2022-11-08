import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { Category } from './types/Category'
import { Item } from './types/Item'

import { categories } from './data/categories'
import { items } from './data/items'

import TableArea from './components/TableArea';
import InfoArea from './components/InfoArea';
import InputArea from './components/InputArea';

type Items = {
  items: Item[];
}


const App = () => {
  const [listItems, setListItems] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
      setFilteredList(filterListByMonth(listItems, currentMonth));
  }, [listItems, currentMonth])

  useEffect(() => {
    let incomeCount = 0; 
    let expenseCount = 0;

    for(let i in filteredList){

      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncomes(incomeCount);
    setExpenses(expenseCount);

  }, [filteredList])
  
  const handleAddItem = (item: Item) => {
    let newListItems = [...listItems];
    newListItems.push(item);
    setListItems(newListItems);
  };

  const handleMonthChange = (newMonth: string) => {
    setcurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header >
        <C.HeaderText>React TypeScript Finance</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          incomes={incomes}
          expenses={expenses}
        />

        <InputArea onAddItem={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}



export default App;
