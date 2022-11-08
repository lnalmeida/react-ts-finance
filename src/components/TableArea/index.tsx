import * as C from './style';
import { Item } from '../../types/Item';

import TableItem from '../TableItem'

type TableProps = {
    list: Item[];
}

const TableArea = ({list}:TableProps) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={6.25}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={8.125}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Descrição</C.TableHeadColumn>
                    <C.TableHeadColumn width={9.375}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => {
                    return (
                        <TableItem key={index} item={item}/>
                    )})
                }
            </tbody>
        </C.Table>
    );
}

export default TableArea;