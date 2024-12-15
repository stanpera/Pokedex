import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const ArenaSkullIcon = ({ isArena, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon
        icon={faSkullCrossbones}
        className={clsx(
          `text-2xl lg:text-3xl `,
          isArena && "text-main-red dark:text-dark-red",
          !isArena && "text-main-gray dark:text-dark-second-text-color"
        )}
      />
    </div>
  );
};

export default ArenaSkullIcon;
