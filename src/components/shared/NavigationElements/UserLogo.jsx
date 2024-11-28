import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserSolid } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";

const UserLogo = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={clsx(
        "pb-2 text-xl",
        theme === "light" ? "text-main-text-color" : "text-dark-second-text-color"
      )}
    >
      <FontAwesomeIcon icon={faUserSolid} className="mr-1" />
      {children}
    </div>
  );
};

export default UserLogo;
