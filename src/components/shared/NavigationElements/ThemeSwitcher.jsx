import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-end items-center space-x-2 ml-2 pb-2">
      <div
        onClick={toggleTheme}
        className={clsx(
          "relative inline-flex items-center justify-center w-10 h-5 rounded-full transition-colors border-0 focus:ring-0 shadow-sm cursor-pointer",
          theme === "light"
            ? "bg-switcherColor shadow-switcherShadow"
            : "bg-dark-second-text-color shadow-dark-red-shadow"
        )}
      >
        <span
          className={clsx(
            "absolute left-0 w-5 h-5 rounded-full transform transition-transform",
            theme === "light" ? "bg-white" : "translate-x-6 bg-dark-red"
          )}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;






