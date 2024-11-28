import React, { useState } from "react";
import "./TodoList.css";
import ProgressBar from "./component/ProgressBar/ProgressBar.jsx";
import TaskList from "./component/TaskList/TaskList.jsx";
import AddTaskForm from "./component/AddTaskForm/AddTaskForm.jsx";



const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [moveCompletedToEnd, setMoveCompletedToEnd] = useState(false);

  // 添加新任務
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    if (tasks.some((task) => task.text === taskText.trim())) {
      alert("Task already exists!");
      return;
    }
    const newTask = { id: Date.now(), text: taskText.trim(), completed: false };
    setTasks([newTask, ...tasks]);
  };

  // 切換任務完成狀態
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 刪除任務
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 計算進度百分比
  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  // 任務排序（是否移動完成的任務到末尾）
  const sortedTasks = moveCompletedToEnd
    ? [...tasks].sort((a, b) => a.completed - b.completed)
    : tasks;

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <p>Add things to do and track progress</p>
      <hr />

      {/* 進度條 */}
      <ProgressBar progress={progress} allCompleted={completedCount === tasks.length && tasks.length > 0} />
      

      {/* 任務列表 */}
      <TaskList
        tasks={sortedTasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />

      <hr />

      {/* 移動完成項目到末尾的選項 */}
      <div className="options">
        <label className="toggle">
          <input
            type="checkbox"
            checked={moveCompletedToEnd}
            onChange={() => setMoveCompletedToEnd(!moveCompletedToEnd)}
          />
          <span className="slider"></span>
        </label>
        <span>Move completed tasks to end?</span>
      </div>

      {/* 添加新任務 */}
      <AddTaskForm addTask={addTask} />
    </div>
  );
};

export default TodoList;