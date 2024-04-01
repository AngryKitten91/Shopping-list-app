// import { useState } from "react";

function Task({ name, message, uuid, handleToggle, isActive }) {
  return (
    <>
      <div className={`task-container ${isActive ? "unchecked" : "checked"}`}>
        <div className="flex flex-space-between">
          <div>
            <h2>{name}</h2>
            <p>{message}</p>
          </div>
          <input
            onClick={() => handleToggle(uuid)}
            className="inputBox"
            key={uuid}
            type="checkbox"
            defaultChecked={!isActive}
            name=""
            id=""
          />
        </div>
      </div>
    </>
  );
}

export default Task;
