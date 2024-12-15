import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const ArrowLeft = ({ onClick, disabled }) => {

  return (
    <button
      onClick={onClick}
      className={clsx(
        !disabled && "cursor-pointer hover:text-exit-arena text-main-text-color dark:text-dark-second-text-color",
        disabled && "cursor-default opacity-50 hover:"
      )}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={"text-xl lg:text-2xl"}
      />
    </button>
  );
};

export default ArrowLeft;
