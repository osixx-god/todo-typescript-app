import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Todo } from "../App";

interface InputProps{
    tasks: Todo[];
    setTasks: Dispatch<SetStateAction<Todo[]>>
}


function Input({ tasks, setTasks }: InputProps) {
  const [newTask, setNewTask] = useState<string>("");
  function handleKeydown(e: React.KeyboardEvent){
    const newT: Todo = { id: Date.now(), text: newTask, completed: false };

    if (e.key==="Enter") {
      setTasks([newT, ...tasks]);
      setNewTask("");
    }
  }

  return (
    <div className="flex bg-white gap-4 rounded-sm text-lg dark:bg-[#25273c] dark:text-white w-full shadow-md ">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeydown}
        className="rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-300 p-4 w-full   "
      />
    </div>
  );
}
export default Input;
