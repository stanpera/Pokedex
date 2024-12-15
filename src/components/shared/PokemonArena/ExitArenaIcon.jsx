import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";

const ExitArenaIcon = ({ onClick}) => {


  return (
    <button
      onClick={onClick}
      className={
        "cursor-pointer text-center w-40 my-5 md:my-0 hover:animate-shake2 hover:text-exit-arena text-main-text-color hover:text-main-exit-arena dark:text-dark-second-text-color"
      }
    >
      <FontAwesomeIcon icon={faLandmark} className={"text-4xl lg:text-6xl"} />
      <h3 className={"text-2xl lg:text-3xl text-center font-bangers"}>
        OPUŚĆ ARENĘ
      </h3>
    </button>
  );
};

export default ExitArenaIcon;
