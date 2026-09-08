import { type Dispatch, type SetStateAction } from "react";
import type { Todo } from "../App";
interface filterProps {
  activeTasks: Todo[];
  tasks: Todo[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  setTasks: Dispatch<SetStateAction<Todo[]>>;
}
function Filter({ activeTasks, setFilter, filter, setTasks, tasks }: filterProps) {
  return (
    <footer className={`${tasks.length > 0 ? "flex flex-col  justify-between text-sm text-gray-400 shadow-md gap-2 dark:bg-[#25273c] dark:text-white/30" : "hidden"}`}>
      <div className="flex justify-between border border-gray-500/40 rounded-md ">
        <h4 className="p-3 "><b>{activeTasks.length}</b> item(s) left</h4>
        <div className="gap-4  justify-center hidden md:flex ">
          <button
            className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "All" ? "text-blue-500" : ""}`} 
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "Active" ? "text-blue-500" : ""}`} 
            onClick={() => setFilter("Active")}
          >
            Active
          </button>
          <button
            className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "Completed" ? "text-blue-500" : ""}`} 
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
        <button
          className=" p-3 hover:text-red-600 cursor-pointer"
          onClick={() => setTasks(activeTasks)}
        >
          Clear completed
        </button>
      </div>

      <ul className="flex gap-4  justify-center md:hidden">
        <li
          className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "All" ? "text-blue-500" : ""}`} 
          onClick={() => setFilter("All")}
        >
          All
        </li>
        <li
          className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "Active" ? "text-blue-500" : ""}`} 
          onClick={() => setFilter("Active")}
        >
          Active
        </li>
        <li
          className={`p-3 hover:text-blue-700 cursor-pointer ${filter === "Completed" ? "text-blue-500" : ""}`} 
          onClick={() => setFilter("Completed")}
        >
          Completed
        </li>
      </ul>
    </footer>
  );
}
export default Filter;
