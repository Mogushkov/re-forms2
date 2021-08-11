import './TrainingForm.css';

export default function TrainingForm(props) {
   const { onAdd } = props;
   const onSubmitHandler = (e) => {
        e.preventDefault();
        onAdd(e.target.date.value, e.target.dist.value);
        e.target.date.value = '';
        e.target.dist.value = '';
    }

    return(
        <form className="Form" onSubmit={onSubmitHandler}>
            <div className="Date-Block">
                <label className="Data-Label" htmlFor="date">Дата (ДД.ММ.ГГ)</label>   
                 <input type="date" className="Date-Input" id="date" name="date" required></input>

            </div>
            <div className="Dist-Block">
                <label className="Dist-Label" htmlFor="dist">Пройдено км</label>
                 <input type="number" className="Dist-Input" id="dist" name="dist" required></input>
            </div>
            <button className="Ok-Button">Ok</button>
        </form>
    )
}