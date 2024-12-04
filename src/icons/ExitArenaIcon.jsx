import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ExitArenaIcon = ({ onClick, disabled = false }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={clsx(
        "cursor-pointer text-center w-40 my-5 md:my-0 hover:animate-shake2 hover:text-exit-arena",
        theme === "light"
          ? "text-main-text-color hover:text-main-exit-arena"
          : "text-dark-second-text-colo"
      )}
    >
      <FontAwesomeIcon icon={faLandmark} className={clsx("text-4xl lg:text-6xl")} />
      <h3 className={clsx("text-2xl lg:text-3xl text-center font-bangers")}>
        OPUŚĆ ARENĘ
      </h3>
    </button>
  );
};

export default ExitArenaIcon;
