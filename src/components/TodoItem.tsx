import type { Todo } from "../App";
interface TodoItemProps {
  tasks: Todo[];
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TodoItem({ tasks, toggleCompleted, deleteTask }: TodoItemProps) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className=" flex items-center justify-between bg-white rounded-sm border border-gray-500/40 gap-4 px-6 py-4 dark:bg-[#25273c] dark:text-white"
          >
            <div className="flex gap-4">
              <div
                className={`rounded-full flex items-center justify-center w-6 h-6 
                  ${
                    task.completed
                      ? "bg-linear-to-br from-sky-500 to-fuchsia-500"
                      : "border border-gray-700/30 transition duration-300 hover:border-blue-500/50 hover:border-2 dark:border-gray-600 dark:hover:border-blue-500"
                  }`}
                onClick={() => toggleCompleted(task.id)}
              >
                {task.completed && (
                  <img src="/images/icon-check.svg" alt="check mark" />
                )}
              </div>
              <span
                className={`text-lg mr-auto self-start leading-tight ${task.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"} `}
              >
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(task.id)}
                    className="hover:cursor-pointer w-3 dark:invert hover:opacity-40 transition duration-200 ">
                    

            <img
              src="/images/icon-cross.svg"
              alt="icon cross"
            />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoItem;
