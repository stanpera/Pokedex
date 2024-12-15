import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteIcon = ({ className, onClick }) => {
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon
        icon={faX}
        className={`text-2xl duration-300 hover:text-main-red dark:text-dark-second-text-color dark:duration-300 dark:hover:text-dark-red ${className} `}
      />
    </div>
  );
};

export default DeleteIcon;
