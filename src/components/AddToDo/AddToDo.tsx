import React, { useState } from "react";
import "./style.css";

interface Props {
  addtodo: (newTaskText: string) => void; 
}

const AddToDo : React.FC<Props> = ({ addtodo }) =>{
  const [newTaskText, setNewTaskText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim() !== "") {
      addtodo(newTaskText);
      setNewTaskText("");
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        placeholder="New task..."
        onChange={handleInputChange}
        value={newTaskText}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default AddToDo;