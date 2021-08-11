import './Item.css'

export default function Item(props) {

    const {data, onDel} = props;

    const onDelItem = () => {
        onDel(data.id);
    }

    return(
        <div className="Item">  
                    <span className="Widget-Date">{data.date}</span>
                    <span className="Widget-Dist">{data.dist}</span>
                    <div className="Widget-Actions">
                        <button className="Edit">✎</button>
                        <button className="Delete" onClick={onDelItem}>✘</button>
                    </div>
                </div>
    )
}