import { useContext, useState } from "react";
import { ToDoContext } from "../App";

export function FormContainer() {
  const [newItem, setNewItem] = useState("");
  const { setToDo } = useContext(ToDoContext);

  function handleSumbit(e) {
    e.preventDefault();

    setToDo((curr) => {
      return [
        ...curr,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
  }

  return (
    <form onSubmit={handleSumbit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
