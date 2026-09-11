import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import Filter from "./components/Filter";
import "./App.css";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("savedT");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("savedT", JSON.stringify(tasks));
  }, [tasks]);
  const [theme, setTheme] = useState<string>("light");
  function themeToggle() {
    
    const newTheme:string = theme==="light"? "dark": "light";
    setTheme(newTheme);
  }
  
  function deleteTask(id:number){
   const updatedT = tasks.filter((task) => id!==task.id)
    setTasks(updatedT);
  }

  function toggleCompleted(id: number) {
    const updatedTasks: Todo[] = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  const completedTasks: Todo[] = tasks.filter(
    (task) => task.completed === true
  );

  const activeTasks: Todo[] = tasks.filter((task) => {
    return task.completed === false;
  });

  let visibleTasks: Todo[];
  if (filter === "All") {
    visibleTasks = tasks;
  } else if (filter === "Completed") {
    visibleTasks = completedTasks;
  } else {
    visibleTasks = activeTasks;
  }
  
  return (
    <>
      <div
        className={`flex flex-col min-h-screen ${theme==="dark"? "dark bg-[#161722]" : "bg-gray-100"  }`}
      >
        <Header themeToggle={themeToggle}
                theme={theme}/>
        <section className="-mt-28 flex flex-col gap-5 p-4 mx-auto max-w-2xl w-full">
          <Input 
                  tasks={tasks}
                  setTasks={setTasks}/>
          <TodoItem
            tasks={visibleTasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
          <Filter activeTasks={activeTasks}
                  tasks={tasks}
                  filter={filter}
                  setFilter={setFilter}
                  setTasks={setTasks}/>
        </section>
      </div>
    </>
  );
}

export default App;
