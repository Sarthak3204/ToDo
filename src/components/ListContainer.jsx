import { useContext } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoContext } from "../App";

export function ListContainer() {
  const { ToDo } = useContext(ToDoContext);
  return (
    <ul className="list">
      {ToDo.length == 0 && "No ToDo's"}
      {ToDo.map((t) => (
        <ToDoItem {...t} key={t.id} />
      ))}
    </ul>
  );
}
