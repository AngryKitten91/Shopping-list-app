import { useState, useEffect } from "react";
import Task from "./Task";
import Form from "./Form";
import "./App.scss";

const DB_KEY = "taskListData";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    isActive: true,
    uuid: "",
    order: 0,
  });

  const [taskList, setTaskList] = useState([]);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem(DB_KEY);
    if (localData) {
      setTaskList(JSON.parse(localData));
      setOrder(JSON.parse(localData).length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(DB_KEY, JSON.stringify(taskList));
  }, [taskList]);

  const handleUUID = () => {
    return crypto.randomUUID();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTaskAdd = (val) => {
    setTaskList((prevState) => {
      if (prevState.length === 0) {
        return [val];
      }
      return [...prevState, val];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const UUID = handleUUID();
    handleTaskAdd({ ...formData, uuid: UUID, order: order });
    setOrder((prev) => prev + 1);
    setFormData({
      name: "",
      message: "",
      isActive: true,
      uuid: "",
      order: 0,
    });
    console.log(formData);
  };

  const handleActiveToggle = (searchUUID) => {
    setTaskList((prevState) => {
      const searchedVal = prevState.filter(
        ({ uuid }) => uuid === searchUUID
      )[0];
      const restValues = prevState.filter(({ uuid }) => uuid !== searchUUID);
      return [
        ...restValues,
        { ...searchedVal, isActive: !searchedVal.isActive },
      ];
    });
  };

  return (
    <div className="container">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />

      {taskList &&
        taskList
          .sort((a, b) => a.order - b.order)
          .map(({ name, message, uuid, isActive }, i) => {
            return (
              <Task
                key={i}
                uuid={uuid}
                name={name}
                message={message}
                isActive={isActive}
                handleToggle={handleActiveToggle}
              />
            );
          })}
    </div>
  );
}

export default App;
