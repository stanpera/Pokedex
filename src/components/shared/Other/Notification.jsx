import clsx from "clsx"; // Pamiętaj, aby zainstalować clsx: npm install clsx
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

const Notification = ({ variant = "primary", message = "Notification" }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p
        className={clsx(
          "text-center h-48 flex px-36 flex-col justify-center rounded-lg",
          variant === "primary" &&
            theme === "light" &&
            "bg-notification-green text-white",
          variant === "secondary" &&
            theme === "light" &&
            "bg-notification-red text-white",
          variant === "primary" &&
            theme === "dark" &&
            "bg-notification-dark-green text-dark-main-text-color",
          variant === "secondary" &&
            theme === "dark" &&
            "bg-notification-dark-red text-dark-main-text-color"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default Notification;
