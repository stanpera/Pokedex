import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "lg:hidden w-full text-right text-main-text-color hover:text-main-red dark:text-dark-second-text-color dark:hover:text-dark-red"
      }
    >
      <FontAwesomeIcon icon={faBars} className={"text-2xl text-right"} />
    </button>
  );
};

export default NavBarIcon;
