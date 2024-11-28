import React, { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">Add to list</label>
        <div className="input-container">
          <input
            id="newTodo"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button type="submit">
            <span>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
