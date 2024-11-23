import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import clsx from "clsx";

const AppWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={clsx( "min-h-screen",
        theme === "light" ? "bg-backgroundLight" : "bg-backgroundDark"
      )}
    >
      {children}
    </div>
  );
};

export default AppWrapper;




