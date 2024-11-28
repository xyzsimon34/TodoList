import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
      {tasks.length === 0 && <p className="no-tasks">No tasks added yet!</p>}
    </ul>
  );
};

export default TaskList;