export default function Modal({ modal, delete: deleteTask, task }) {
  return (
    <div
      className="w-full h-full overflow-auto bg-[#00000048] z-10 fixed top-0 left-0 flex justify-center"
      onClick={() => modal(false)}
    >
      <div className="bg-[#fefefe] border-2 border-black m-auto h-1/3 w-1/4 flex text-center flex-col">
        <div className="py-8 flex flex-col gap-6">
          <h1 className="text-[30px]">Attention!</h1>
          <div className="text-[18px]">Are you Sure to delete this Task?</div>
          <div className="flex gap-2 justify-center">
            <button
              className="rounded-md py-1 px-4 bg-red-500 transition text-white hover:bg-red-700"
              onClick={deleteTask(task.id)}
            >
              Delete
            </button>
            <button className=" rounded-md py-1 px-4 bg-slate-400 transition text-white hover:bg-slate-500">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
