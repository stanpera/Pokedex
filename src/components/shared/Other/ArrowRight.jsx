import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const ArrowRight = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        !disabled &&
          "cursor-pointer hover:text-exit-arena text-main-text-color dark:text-dark-second-text-color",
        disabled && "cursor-default opacity-50"
      )}
    >
      <FontAwesomeIcon icon={faArrowRight} className={"text-xl lg:text-2xl"} />
    </button>
  );
};

export default ArrowRight;
