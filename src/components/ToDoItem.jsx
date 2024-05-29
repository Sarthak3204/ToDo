import { useContext } from "react";
import { ToDoContext } from "../App";

export function ToDoItem({ id, title, completed }) {
  const { setToDo } = useContext(ToDoContext);

  function toggleToDo(id, completed) {
    setToDo((curr) => {
      return curr.map((t) => {
        if (t.id === id) {
          return { ...t, completed };
        }
        return t;
      });
    });
  }

  function deleteToDo(id) {
    setToDo((curr) => curr.filter((t) => t.id !== id));
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>

      <button onClick={() => deleteToDo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
