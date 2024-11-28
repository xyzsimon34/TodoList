import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress, allCompleted }) => {
  return (
    <div className="progress-bar">
      <span className="progress-text">
        {allCompleted ? "All tasks completed!" : `${Math.round(progress)}% completed`}
      </span>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
