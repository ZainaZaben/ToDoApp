import "./style.css";
import { Task } from "../../interface";
import ToDoItem from "../ToDoItem";

interface TodoListProps {
  todoList: Task[];
  toggleTodo: (id: number) => void;
  updateToDos: (id: number) => void;
}

const ToDoList: React.FC<TodoListProps> = ({
  todoList,
  toggleTodo,
  updateToDos,
}) => {
  return (
    <div className="ToDoContainer">
        {todoList.map((task, key: number) => {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTodo={toggleTodo}
            updateToDos={updateToDos}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
