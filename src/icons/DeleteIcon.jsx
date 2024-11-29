import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DeleteIcon = ({ className, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div onClick={onClick}>
      <FontAwesomeIcon
        icon={faX}
        className={clsx(
          `text-2xl ${className} `,
          theme === "light" ? " duration-300 hover:text-main-red" : "text-dark-second-text-color duration-300 hover:text-dark-red"
        )}
      />
    </div>
  );
};

export default DeleteIcon;
