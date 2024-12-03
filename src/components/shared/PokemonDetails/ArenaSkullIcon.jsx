import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ArenaSkullIcon = ({ isArena, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={faSkullCrossbones}
        className={clsx(
          `text-3xl`,
          isArena
            ? theme === "light"
              ? "text-main-red"
              : "text-dark-red"
            : theme === "light"
            ? "text-main-gray"
            : "text-dark-second-text-color"
        )}
      />
    </div>
  );
};

export default ArenaSkullIcon;
