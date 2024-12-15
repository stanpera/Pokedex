import clsx from "clsx";

const Notification = ({ variant = "primary", message = "Notification" }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p
        className={clsx(
          "text-center h-48 flex px-36 flex-col justify-center rounded-lg",
          variant === "primary" &&
            "bg-notification-green text-white dark:bg-notification-dark-green dark:text-dark-main-text-color",
          variant === "secondary" &&
            "bg-notification-red text-white dark:bg-notification-dark-red dark:text-dark-main-text-color"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default Notification;
