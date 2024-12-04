import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";

const Button = ({ children, onClick, to, color, className }) => {
  const { theme } = useContext(ThemeContext);

  if (to) {
    return (
      <Link
        to={to}
        className={clsx(
          `text-base px-2 py-2 lg:text-lg lg:px-3 xl:text-xl xl:px-5 text-center font-semibold rounded border-0 shadow-sm`,
          color === "menu" &&
            theme === "light" &&
            "shadow-navigation-button-shadow bg-menu-button-gradient hover:bg-hover-menu-button-gradient",
          color === "menu" &&
            theme === "dark" &&
            "shadow-dark-black bg-dark-button-gradient hover:bg-hover-dark-button-gradient",
          color === "login" &&
            theme === "light" &&
            "bg-login-button-gradient hover:bg-hover-login-button-gradient",
          color === "login" &&
            theme === "dark" &&
            "shadow-dark-black bg-dark-login-button-gradient hover:bg-hover-dark-login-button-gradient",
          color === "logout" &&
            theme === "light" &&
            "bg-logout-button-gradient hover:bg-hover-logout-button-gradient",
          color === "logout" &&
            theme === "dark" &&
            "shadow-dark-black bg-dark-red-gradient hover:bg-hover-dark-red-gradient",
          `${className}`
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        `text-base px-2 py-2 lg:text-lg lg:px-4 xl:text-xl xl:px-5 text-center font-semibold rounded border-0 shadow-sm`,
        color === "menu" &&
          theme === "light" &&
          "shadow-navigation-button-shadow bg-menu-button-gradient hover:bg-hover-menu-button-gradient",
        color === "menu" &&
          theme === "dark" &&
          "shadow-dark-black bg-dark-button-gradient hover:bg-hover-dark-button-gradient",
        color === "login" &&
          theme === "light" &&
          "bg-login-button-gradient hover:bg-hover-login-button-gradient",
        color === "login" &&
          theme === "dark" &&
          "shadow-dark-black bg-dark-login-button-gradient hover:bg-hover-dark-login-button-gradient",
        color === "logout" &&
          theme === "light" &&
          "bg-logout-button-gradient hover:bg-hover-logout-button-gradient",
        color === "logout" &&
          theme === "dark" &&
          "shadow-dark-black bg-dark-red-gradient hover:bg-hover-dark-red-gradient",
        `${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;

