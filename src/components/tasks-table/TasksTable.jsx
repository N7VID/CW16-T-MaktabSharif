import Task from "../task/Task";

export default function TasksTable({
  tasks,
  delete: deleteProps,
  setModal,
  handleDoneTask,
}) {
  return (
    <>
      {tasks.map((value) => (
        <Task
          handleDoneTask={handleDoneTask}
          key={value.id}
          task={value}
          delete={(text) => deleteProps(text)}
          setModal={setModal}
        />
      ))}
    </>
  );
}
