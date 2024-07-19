export default function DropDown({ filter }) {
  return (
    <select
      name=""
      id=""
      className="outline-none w-50 h-[34px]"
      onChange={(e) => filter(e.target.value)}
    >
      <option value="All">Select task status</option>
      <option value="Done">Done</option>
      <option value="unDone">Undone</option>
    </select>
  );
}
