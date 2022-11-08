import { useState } from 'react';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './style';

type InputAreaProps = {
    onAddItem: (item:Item) => void;
}

const InputArea = ({onAddItem}: InputAreaProps) => {
    const [dataField, setDataField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);


    const handleAddEvent = ( ) => {
        let errors: string[] = [];

        if(isNaN(new Date(dataField).getTime())){
            errors.push("Data inválida")
        };

        if(!categoryKeys.includes(categoryField)){
            errors.push("Categoria inválida");
        };

        if(titleField ===''){
            errors.push("O título não pode ser vazio!");
        };

        if(valueField <= 0) {
            errors.push("O valor precisa ser positivo e maior que ZERO");
        };

        if(errors.length > 0) {
            alert(errors.join("\n")) 
        } else {
            let newItem: Item = {
                data: newDateAdjusted(dataField),
                category: categoryField,
                title: titleField,
                value: valueField
            }
            onAddItem(newItem);
        }
  
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dataField} onChange={e => setDataField(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle> 
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)} >
                    <>
                        <option>Selecione</option>
                        {categoryKeys.map((key, index) => {
                            return (
                                <option key={index} value={key}>{categories[key].title}</option>
                            )
                        })}
                    </>
                </C.Select>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Titulo</C.InputTitle>
                <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent} >Novo Lançamento</C.Button>
            </C.InputLabel>

        </C.Container>
    );
}

export default InputArea;