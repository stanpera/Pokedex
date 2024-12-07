import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const FightSkullIcon = ({ onClick, disabled = false }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "cursor-pointer text-center w-40 my-5 md:my-0",
        theme === "light"
          ? "text-main-text-color"
          : "text-dark-second-text-color",
        !disabled && "hover:text-main-red",
        disabled && "cursor-default opacity-50",
        !disabled && "hover:animate-shake"
      )}
    >
      <FontAwesomeIcon icon={faSkullCrossbones} className={clsx("text-4xl lg:text-6xl")} />
      <h3 className={clsx("text-2xl lg:text-3xl  text-center font-bangers")}>WALCZ!</h3>
    </button>
  );
};

export default FightSkullIcon;
