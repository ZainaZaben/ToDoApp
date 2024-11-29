import "./style.css";
import AddToDo from "../AddToDo";
import ToDoList from "../ToDoList";
import { Task } from "../../interface";
import { useState } from "react";

const ToDoApp: React.FC = () => {
  const [ToDoListArray, setToDoListArray] = useState<Task[]>([]);
  const handleAddTodo = (newTaskText: string) => {
    const newTask: Task = {
      id: ToDoListArray.length + 1,
      taskText: newTaskText,
      isCompleted: false,
    };
    setToDoListArray([...ToDoListArray, newTask]);
  };

  const handleToggleTodo = (id: number): void => {
    const updatedTasks = ToDoListArray.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
      setToDoListArray(updatedTasks);
  };

  const handleUpdateToDos = (id: number): void => {
    const updatedTasks = ToDoListArray.filter((task) => task.id !== id);
    setToDoListArray(updatedTasks);
  };

  return (
    <div className="ToDoContainer">
      <AddToDo addtodo={handleAddTodo} />
      <ToDoList
        todoList={ToDoListArray}
        toggleTodo={handleToggleTodo}
        updateToDos={handleUpdateToDos}
      />
    </div>
  );
};

export default ToDoApp;
