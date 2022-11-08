import { Item } from '../types/Item';

export const items: Item[] = [
    {
        id:1,
        data: new Date(2022, 10, 3),
        category: 'food',
        title: 'McDonalds',
        value: 28.36
    },
    {
        id:2,
        data: new Date(2022, 10, 11),
        category: 'food',
        title: 'Bobs',
        value: 80.36
    },
    {   
        id:3,
        data: new Date(2022, 10, 13),
        category: 'rent',
        title: 'Aluguel casa de praia',
        value: 1500
    },
    {
        id:4,
        data: new Date(2022, 10, 2),
        category: 'salary',
        title: 'Salário Cognizant',
        value: 2680
    },
    {
        id:5,
        data: new Date(2022, 9, 1),
        category: 'salary',
        title: 'Serviço Extra',
        value: 2680
    },
    {
        id:6,
        data: new Date(2022, 9, 1),
        category: 'rent',
        title: 'Despesa Extra',
        value: 5680
    }
];