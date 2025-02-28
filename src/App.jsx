import { useEffect, useState } from "react";
import ManageTask from "./components/manage-task/manageTask";
import TasksTable from "./components/tasks-table/TasksTable";
import data from "./data";
import Modal from "./components/modal/Modal";

function App() {
  const [select, setSelect] = useState("All");
  const [tasks, setTasks] = useState(data);
  const [modal, setModal] = useState({ isOpen: false, deleteId: null });

  function handleAddTask(newValue) {
    let obj = { id: crypto.randomUUID(), title: newValue, isDone: false };
    setTasks((prevTask) => {
      return [...prevTask, obj];
    });
  }

  function handleDoneTask(id) {
    setTasks((prevTask) => {
      const newTask = prevTask.map((task) => {
        if (task.id === id) {
          task.isDone = true;
        }
        return task;
      });
      return newTask;
    });
  }

  function handleDeleteButton(id) {
    setTasks((prevTask) => {
      const deleted = prevTask.filter((task) => task.id !== id);
      return deleted;
    });
  }

  return (
    <>
      {modal.isOpen && (
        <Modal
          modal={modal}
          setModal={setModal}
          handleDeleteButton={handleDeleteButton}
        />
      )}
      <div className="flex flex-col justify-center items-center bg-blue-500 w-screen h-screen font-nunito">
        <h1 className="text-white text-[30px] mb-4">Tasks</h1>
        <ManageTask
          filter={(text) => setSelect(text)}
          akbar={(text) => handleAddTask(text)}
        />
        <TasksTable
          tasks={
            select === "Done"
              ? tasks.filter((task) => task.isDone)
              : select === "unDone"
              ? tasks.filter((task) => !task.isDone)
              : tasks
          }
          delete={(id) => handleDeleteButton(id)}
          setModal={setModal}
          handleDoneTask={handleDoneTask}
        />
      </div>
    </>
  );
}

export default App;
