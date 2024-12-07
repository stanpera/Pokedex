import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";

const AppColorWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={clsx( "min-h-screen flex flex-col items-center overflow-hidden",
        theme === "light" ? "bg-background-light text-main-text-color" : "bg-background-dark text-dark-main-text-color"
      )}
    >
      {children}
    </div>
  );
};

export default AppColorWrapper;




