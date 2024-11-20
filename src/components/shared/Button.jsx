import { Link } from "react-router-dom";
import clsx from "clsx";

const Button = ({ children, onClick, to, color, size, disabled = false }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(
          "text-main-text-color shadow-navigation-button-shadow px-6 py-2 font-semibold rounded border-0 shadow-sm",
          color === "menu" &&
            "bg-menu-button-gradient hover:bg-hover-menu-button-gradient",
          color === "login" &&
            "bg-login-button-gradient hover:bg-hover-login-button-gradient",
          color === "logout" &&
            "bg-logout-button-gradient hover:bg-hover-logout-button-gradient",
          size === "small" && "text-sm",
          size === "medium" && "text-xl",
          size === "large" && "text-2xl"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        "text-main-text-color shadow-navigation-button-shadow px-6 py-2 font-semibold rounded border-0 shadow-sm",
        color === "menu" &&
          "bg-menu-button-gradient hover:bg-hover-menu-button-gradient",
        color === "login" &&
          "bg-login-button-gradient hover:bg-hover-login-button-gradient",
        color === "logout" &&
          "bg-logout-button-gradient hover:bg-hover-logout-button-gradient",
          size === "small" && "text-sm",
          size === "medium" && "text-xl",
          size === "large" && "text-2xl"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
