export default function Task({
  task,
  delete: deleteProps,
  setModal,
  handleDoneTask,
}) {
  return (
    <div className="flex justify-center gap-1 mt-6 h-7">
      <div
        className={
          task.isDone
            ? "flex items-center pl-2 bg-white h-8 w-64 line-through"
            : "flex items-center pl-2 bg-white h-8 w-64"
        }
      >
        {task.title}
      </div>
      <div
        onClick={() => handleDoneTask(task.id)}
        className={
          task.isDone
            ? "flex justify-center bg-green-800 w-8 h-8 cursor-pointer"
            : "flex justify-center bg-green-600 w-8 h-8 cursor-pointer"
        }
      >
        <img src="/check-white.svg" alt="" className="w-5" />
      </div>
      <div
        className="flex justify-center bg-orange-500 w-8 h-8 cursor-pointer"
        onClick={() => setModal(() => ({ deleteId: task.id, isOpen: true }))}
      >
        <img src="/bin-white.svg" alt="" className="w-5" />
      </div>
    </div>
  );
}
