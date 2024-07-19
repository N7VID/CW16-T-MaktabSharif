import Task from "../task/Task";

export default function TasksTable({ tasks, delete: deleteProps, modal }) {
  return (
    <>
      {tasks.map((value) => (
        <Task
          task={value}
          delete={(text) => deleteProps(text)}
          showModal={modal}
        />
      ))}
    </>
  );
}
