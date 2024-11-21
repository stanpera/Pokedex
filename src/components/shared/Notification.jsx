import clsx from "clsx"; // Pamiętaj, aby zainstalować clsx: npm install clsx

const Notification = ({ variant = "primary", message = "Notification" }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <p
        className={clsx(
          "text-center h-48 w-2/6 flex flex-col justify-center rounded-lg",
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
