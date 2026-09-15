# Todo App

A todo list app built with React, TypeScript, and Tailwind CSS — supporting adding, completing, deleting, and filtering tasks, with persistent storage and a light/dark theme toggle.

**Live demo:** [todo-typescript-app-five.vercel.app](https://todo-typescript-app-five.vercel.app/)

## Demo

https://github.com/user-attachments/assets/98d1cf84-a164-48c5-9206-9c95d3344cbc

## Features

- **Add tasks** — type a task and press Enter to add it to the list
- **Toggle complete** — click a task's circle to mark it done or undone
- **Delete tasks** — remove a task with the delete icon
- **Filter tasks** — view All, Active, or Completed tasks
- **Clear completed** — remove all completed tasks in one click
- **Persistent storage** — tasks are saved to `localStorage`, so they survive a page refresh
- **Light/dark theme** — toggle between light and dark mode with the moon/sun icon
- **Live task count** — see how many active tasks remain at a glance

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vercel](https://vercel.com/) — deployment

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/osixx-god/todo-typescript-app.git
cd todo-typescript-app
npm install
```

Run the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

## What I Learned

This project was built as a hands-on introduction to TypeScript with React, starting from no prior TypeScript experience. Key concepts covered along the way:

- Typing component props with interfaces, and typing `useState` with generics (e.g. `useState<Todo[]>([])`)
- Typing event handlers (`React.KeyboardEvent`, `React.MouseEvent`) and `useState` setter functions (`Dispatch<SetStateAction<T>>`)
- Lifting state up and passing data/functions between components via props
- Working with arrays immutably using `.map()` and `.filter()` instead of mutating state directly
- Deriving values (like filtered task lists) from existing state during render, rather than storing them in separate state
- Persisting state to `localStorage` with `useEffect`
- Styling with Tailwind CSS, including custom theming via `@theme` and dark mode

## License

This project is open source and available under the [MIT License](LICENSE).
