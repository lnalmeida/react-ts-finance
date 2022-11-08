import * as C from './style';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type TableItemProps = {
    item: Item;
}

const TableItem = ({item}: TableItemProps) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.data)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
};

export default TableItem;