import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <span className="task-text">{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        ❌
      </button>
    </li>
  );
};

export default TaskItem;
