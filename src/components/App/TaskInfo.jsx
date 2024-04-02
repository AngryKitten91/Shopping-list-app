// import { useState } from "react";

function TaskInfo({ title, msg }) {
  return (
    <>
      <div className="task-container box fade-in task-info">
        <div className="flex flex-space-between">
          <div>
            <h2 className="header-taskInfo">{title}</h2>
            <p className="header-content">{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskInfo;
