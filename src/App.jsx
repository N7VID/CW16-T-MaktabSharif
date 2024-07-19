import { useEffect, useState } from "react";
import ManageTask from "./components/manage-task/manageTask";
import TasksTable from "./components/tasks-table/TasksTable";
import data from "./data";
import Modal from "./components/modal/Modal";

// const getLocalStorage = JSON.parse(localStorage.getItem("tasks"));

function App() {
  const [select, setSelect] = useState("All");
  const [tasks, setTasks] = useState(data);
  const [modal, setModal] = useState(false);

  function handleAddTask(newValue) {
    let obj = { id: crypto.randomUUID(), title: newValue, isDone: false };
    setTasks((prevTask) => {
      const array = [...prevTask, obj];
      localStorage.setItem("tasks", JSON.stringify(array));
      return array;
    });
  }

  function handleDeleteButton(id) {
    setTasks((prevTask) => {
      let deleted = prevTask.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(deleted));
      return deleted;
    });
  }

  useEffect(() => {
    handleDropDown();
  }, [select]);

  function handleDropDown() {
    if (select === "Done") {
      setTasks(() => data.filter((task) => task.isDone));
    } else if (select === "unDone") {
      setTasks(() => data.filter((task) => !task.isDone));
    } else {
      setTasks(data);
    }
  }

  return (
    <>
      {modal && (
        <Modal
          task={tasks}
          modal={setModal}
          delete={(id) => handleDeleteButton(id)}
        />
      )}
      <div className="flex flex-col justify-center items-center bg-blue-500 w-screen h-screen font-nunito">
        <h1 className="text-white text-[30px] mb-4">Tasks</h1>
        <ManageTask
          filter={(text) => setSelect(text)}
          akbar={(text) => handleAddTask(text)}
        />
        <TasksTable
          tasks={tasks}
          delete={(id) => handleDeleteButton(id)}
          modal={setModal}
        />
      </div>
    </>
  );
}

export default App;
