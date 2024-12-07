import clsx from "clsx"; 
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const Loading = ({ edit }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        !edit &&
          "flex items-center absolute gap-x-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        edit && "flex flex-col items-center"
      )}
    >
      <p>Trwa pobieranie danych...</p>
      <div
        className={clsx(
          "w-10 h-10 border-4 rounded-full animate-spin",
          theme === "light"
            ? "border-main-gray border-t-main-text-color"
            : "border-dark-red border-t-dark-main-text-color"
        )}
      ></div>
    </div>
  );
};

export default Loading;
