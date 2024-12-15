import { Link } from "react-router-dom";
import clsx from "clsx";

const Button = ({ children, onClick, to, color, className }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(
          `text-base px-2 py-2 lg:text-lg lg:px-3 xl:text-xl xl:px-5 text-center font-semibold rounded border-0 shadow-sm`,
          color === "menu" &&
            "shadow-navigation-button-shadow bg-menu-button-gradient hover:bg-hover-menu-button-gradient dark:shadow-dark-black dark:bg-dark-button-gradient dark:hover:bg-hover-dark-button-gradient",
          color === "login" &&
            "bg-login-button-gradient hover:bg-hover-login-button-gradient dark:shadow-dark-black dark:bg-dark-login-button-gradient dark:hover:bg-hover-dark-login-button-gradient",
          color === "logout" &&
            "bg-logout-button-gradient hover:bg-hover-logout-button-gradient dark:shadow-dark-black dark:bg-dark-red-gradient dark:hover:bg-hover-dark-red-gradient",
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
          "shadow-navigation-button-shadow bg-menu-button-gradient hover:bg-hover-menu-button-gradient dark:shadow-dark-black dark:bg-dark-button-gradient dark:hover:bg-hover-dark-button-gradient",
        color === "login" &&
          "bg-login-button-gradient hover:bg-hover-login-button-gradient dark:shadow-dark-black dark:bg-dark-login-button-gradient dark:hover:bg-hover-dark-login-button-gradient",
        color === "logout" &&
          "bg-logout-button-gradient hover:bg-hover-logout-button-gradient dark:shadow-dark-black dark:bg-dark-red-gradient dark:hover:bg-hover-dark-red-gradient",
        `${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
