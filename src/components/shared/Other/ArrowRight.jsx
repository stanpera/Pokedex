import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ArrowRight = ({ onClick, disabled }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={clsx(
        !disabled &&  "cursor-pointer hover:text-exit-arena",
        theme === "light"
          ? "text-main-text-color"
          : "text-dark-second-text-colo",
        disabled && "cursor-default opacity-50"
      )}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className={clsx("text-xl lg:text-2xl")}
      />
    </button>
  );
};

export default ArrowRight;
