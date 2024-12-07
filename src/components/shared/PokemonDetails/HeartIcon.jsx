import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const HeartIcon = ({ isFavorite, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={faHeart}
        className={clsx(
          "text-2xl lg:text-3xl",
          isFavorite
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

export default HeartIcon;


