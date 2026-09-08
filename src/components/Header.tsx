interface HeaderProps {
  themeToggle: () => void;
  theme: string;
}
function Header({ themeToggle, theme }: HeaderProps) {
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-[url(/images/bg-desktop-light.jpg)]"
          : "bg-[url(/images/bg-desktop-dark.jpg)]"
      } 
                  bg-center bg-cover px-4 h-72 py-8 pt-12 pb-24  `}
    >
      <div className="max-w-3xl mx-auto tracking-wider flex justify-between p-4 text-4xl font-bold text-white">
        <h1>TODO</h1>
        <button onClick={themeToggle}>
          <img
            src={
              theme === "light"
                ? "/images/icon-moon.svg"
                : "/images/icon-sun.svg"
            }
            alt="app-icon"
            className="shrink-0 w-8 h-8 hover:cursor-pointer hover:opacity-65 transition duration-200 hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}
export default Header;
