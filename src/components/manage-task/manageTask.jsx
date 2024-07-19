import DropDown from "../drop-down-box/DropDown";
import Input from "../input/Input";

export default function ManageTask({ filter, akbar }) {
  return (
    <div className="flex gap-4 items-center">
      <Input asghar={(text) => akbar(text)} />
      <DropDown filter={(text) => filter(text)} />
    </div>
  );
}
