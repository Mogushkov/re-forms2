import { useState } from 'react';
import './App.css';
import TrainingForm from './components/TrainingForm/TrainingForm';
import TrainingWidget from './components/TrainingList/TrainingList';
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState([]);
  const onAddItem = (date,dist) => {
    if(items.find((el, i, arr) => {
      if(el.date===date)
      {
        arr[i].dist = Number( arr[i].dist) + Number(dist);
        return true
      }
      else return false;
    }))
    {
      setItems(prevItems => [...prevItems]); 
    }
    else
    {
      setItems(prevItems => [...prevItems, {id: nanoid(), date: date,  dist: dist, dateFormat: new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))}]); 
    }
   }

  const onDeleteHandler = (id) => {
      setItems(prevItems => prevItems.filter(item => item.id !== id )); 
  }
  
  return (
    <div className="App">
     <TrainingForm onAdd={onAddItem} />
     {items.length>0 ? <TrainingWidget items={items} onDelete={onDeleteHandler} /> : null }
    </div>
  );
}

export default App;