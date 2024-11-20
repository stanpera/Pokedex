import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserSolid } from "@fortawesome/free-solid-svg-icons";

const UserLogo = ({ children }) => {
  return (
    <div className="pb-2 text-xl">
      <FontAwesomeIcon icon={faUserSolid} className="text-[#272B5A] mr-1" />
      {children}
    </div>
  );
};

export default UserLogo;
