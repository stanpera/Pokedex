import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const AbilityContainer = ({ children, parametr }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      className={clsx(
        "text-xl text-center font-itim mb-2",
        theme === "light"
          ? "text-pokemon-card-details"
          : "text-dark-second-text-color"
      )}
    >
      {parametr}
      <span
        className={clsx(
          "block",
          theme === "light"
            ? "text-main-text-color"
            : "text-dark-main-text-color"
        )}
      >
        {children}
      </span>
    </p>
  );
};

export default AbilityContainer;
