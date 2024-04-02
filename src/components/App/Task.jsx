// import { useState } from "react";

function Task({ name, message, uuid, handleToggle, isActive, handleDelete }) {
  return (
    <>
      <div
        className={`task-container box fade-in ${
          isActive ? "grey-out" : "grey-in"
        } ${isActive ? "unchecked" : "checked"}`}
      >
        <div className="flex flex-space-between">
          <div>
            <h2>{name}</h2>
            <p>{message}</p>
          </div>
          <div className="flex btn-delete btn-container">
            <div className="btn" onClick={() => handleDelete(uuid)}>
              X
            </div>
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
