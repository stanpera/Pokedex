import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const HeartIcon = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={faHeart}
        className={clsx(
          "text-2xl lg:text-3xl",
          isFavorite && "text-main-red dark:text-dark-red",
          !isFavorite && "text-main-gray dark:text-dark-second-text-color"
        )}
      />
    </div>
  );
};

export default HeartIcon;
