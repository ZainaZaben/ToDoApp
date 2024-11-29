import React from "react";
import { Task } from "../../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; 
import "./style.css";

interface ToDoItemProps {
  task: Task;
  toggleTodo: (id: number) => void;
  updateToDos: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  task,
  toggleTodo,
  updateToDos,
}) => {
  return (
    <div className="task-item">
      <input
        className="checkbox-btn"
        type="checkbox"
        onChange={() => toggleTodo(task.id)}
        checked={task.isCompleted}
      />
      <span className={`${task.isCompleted && "completed"}`}>
        {task.taskText}
      </span>
      <button className="delete-task-btn" onClick={() => updateToDos(task.id)}>
        <FontAwesomeIcon icon={faTrash} /> 
      </button>
    </div>
  );
};

export default ToDoItem;
