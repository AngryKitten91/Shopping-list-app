import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Task from "./Task";
import TaskInfo from "./TaskInfo";
import "./App.scss";

const DB_KEY = "taskListData";

const welcomeTitle = "Hi, nice to see You!";
const welcome =
  "Welcome to our Shopping Cart App! Application is designed to provide you with convenient shopping experience. Get ready to enjoy hassle-free shopping right at your fingertips!";
const callToActionTitle = "Add products to Your list!";
const callToAction =
  "Ready to simplify your shopping experience? Creating your first shopping list is quick and easy. With just a few clicks, you can organize your shopping needs and ensure you never forget an item again.";

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

  const handleReset = () => {
    setTaskList([]);
  };

  const handleDelete = (searchUUID) => {
    setTaskList((prevState) => {
      const newState = prevState.filter((elem) => {
        if (elem.uuid !== searchUUID) return elem;
      });
      return newState;
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
      const newState = prevState.map((elem) => {
        if (elem.uuid === searchUUID) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        }
        return elem;
      });

      return newState;
    });
  };

  return (
    <div className="container">
      <Header />
      <Form
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        handleChange={handleChange}
        formData={formData}
      />
      <div className="flex flex-flex-start task task-list">
        {taskList.length === 0 && (
          <TaskInfo title={welcomeTitle} msg={welcome} />
        )}
        {taskList.length === 0 && (
          <TaskInfo title={callToActionTitle} msg={callToAction} />
        )}
        {taskList.length > 0 &&
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
                  handleDelete={handleDelete}
                  handleToggle={handleActiveToggle}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
