import { createContext, useEffect, useState } from "react";
import "./App.css";
import { FormContainer } from "./components/FormContainer";
import { ListContainer } from "./components/ListContainer";

export const ToDoContext = createContext();

export default function App() {
  const [ToDo, setToDo] = useState(() => {
    const intitalValue = localStorage.getItem("ToDo");
    return intitalValue === null ? [] : JSON.parse(intitalValue);
  });

  useEffect(() => {
    localStorage.setItem("ToDo", JSON.stringify(ToDo));
  }, [ToDo]);

  return (
    <>
      <ToDoContext.Provider value={{ ToDo, setToDo }}>
        <FormContainer />
        <h1 className="header">ToDo List</h1>
        <ListContainer />
      </ToDoContext.Provider>
    </>
  );
}
