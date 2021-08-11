import Item from '../Item/Item';
import './TrainingList.css';

export default function TrainingList(props) {
    const { items, onDelete } = props;
    const sorted = items.sort((a, b) =>  b.dateFormat - a.dateFormat);
    const onDelHandler = (id) => {
        onDelete(id);
    }

    return(
        <div className="List">        
            <div className="List-Header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="List-Table">
                {sorted.map(item => <Item key={item.id} data={item} onDel={onDelHandler} />)}             
            </div>
        </div>
    )
}