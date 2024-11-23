import clsx from "clsx"; // Pamiętaj, aby zainstalować clsx: npm install clsx

const Notification = ({ variant = "primary", message = "Notification" }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p
        className={clsx(
          "text-center h-48 flex px-36 flex-col justify-center rounded-lg",
          variant === "primary"
            ? "bg-green-500 text-white"
            : "bg-error text-white"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default Notification;


