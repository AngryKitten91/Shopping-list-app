// import { useState } from "react";

function Task({ name, message, uuid, handleToggle, isActive, handleDelete }) {
  return (
    <>
      <div
        className={`task-container task-flex task-flex-align  box fade-in ${
          isActive ? "grey-out" : "grey-in"
        } ${isActive ? "unchecked" : "checked"}`}
      >
        <div className="task-flex task-row flex-space-between gap">
          <div className="task-flex task-flex-align  gap task-flex-center">
            <div className="btn btn-delete" onClick={() => handleDelete(uuid)}>
              <p>X</p>
            </div>
            <div>
              <h2>{name}</h2>
              <p>{message}</p>
            </div>
          </div>
          <div className="flex btn-container">
            <input
              onClick={() => handleToggle(uuid)}
              className="inputBox btn"
              key={uuid}
              type="checkbox"
              defaultChecked={!isActive}
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
