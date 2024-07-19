import { useState } from "react";

export default function Input({ asghar }) {
  const [input, setInput] = useState("");
  return (
    <div className="border flex justify-between relative">
      <input
        type="text"
        placeholder="Add Todo Here..."
        className="w-50 h-8 outline-none pl-2"
        id="addInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div
        className="w-6 bg-orange-500 absolute top-1 right-1 cursor-pointer"
        onClick={() => {
          if (input) {
            asghar(input);
            setInput("");
          }
        }}
      >
        <img src="/add-white.svg" alt="add-icon" />
      </div>
    </div>
  );
}
