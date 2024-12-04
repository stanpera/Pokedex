import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const NavBarIcon = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={clsx(
        "lg:hidden w-full text-right",
        theme === "light"
          ? "text-main-text-color hover:text-main-red "
          : "text-dark-second-text-color hover:text-dark-red"
      )}
    >
      <FontAwesomeIcon icon={faBars} className={clsx("text-2xl text-right")} />
    </button>
  );
};

export default NavBarIcon;
