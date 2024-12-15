import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-end items-center space-x-2 ml-2 pb-2">
      <div
        onClick={toggleTheme}
        className={
          "relative inline-flex items-center justify-center w-8 h-4 md:w-10 md:h-5 rounded-full transition-colors border-0 focus:ring-0 shadow-sm cursor-pointer bg-switcher-color shadow-switcher-shadow dark:bg-dark-second-text-color dark:shadow-dark-red-shadow"
        }
      >
        <span
          className={
            "absolute left-0 w-4 h-4 md:w-5 md:h-5 rounded-full transform transition-transform bg-white dark:translate-x-4 dark:lg:translate-x-5 dark:bg-dark-red"
          }
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
