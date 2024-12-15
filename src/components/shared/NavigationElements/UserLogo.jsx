import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserSolid } from "@fortawesome/free-solid-svg-icons";

const UserLogo = ({ children }) => {
  return (
    <div
      className={
        "pb-2 text-md md:text-xl text-main-text-color dark:text-dark-second-text-color"
      }
    >
      <FontAwesomeIcon icon={faUserSolid} className="mr-1" />
      {children}
    </div>
  );
};

export default UserLogo;
