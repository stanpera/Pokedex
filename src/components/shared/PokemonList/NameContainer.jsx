import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const NameContainer = ({ parametr }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h3
      className={clsx(
        "text-2xl xl:text-3xl text-center leading-none capitalize font-bangers",
        theme === "light" ? "text-main-text-color" : "text-dark-main-text-color"
      )}
    >
      {parametr}
    </h3>
  );
};

export default NameContainer;
