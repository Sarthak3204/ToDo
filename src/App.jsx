import { useState } from 'react'
import './App.css'

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [ToDo, setToDo] = useState([]);

  function handleSumbit(e) {
    e.preventDefault();

    setToDo(curr => {
      return [
        ...curr,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }]
    })

    setNewItem("");
  }

  function toggleToDo(id) {
    setToDo(curr => {
      return curr.map(t => {
        if (t.id === id) {
          if (t.completed) return { ...t, completed: false };
          else return { ...t, completed: true };
        }
        else return t;
      })
    })
  }

  function deleteToDo(id) {
    setToDo(curr => curr.filter(t => t.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSumbit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            onChange={e => setNewItem(e.target.value)}
            value={newItem}
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">ToDo List</h1>

      <ul className="list">
        {ToDo.length == 0 && "No ToDo's"}
        {
          ToDo.map(t =>
            <li key={t.id}>
              <label>
                <input
                  type="checkbox"
                  onClick={e => toggleToDo(t.id)}
                />
                {t.title}
              </label>

              <button onClick={() => deleteToDo(t.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        }
      </ul>
    </>
  )
}