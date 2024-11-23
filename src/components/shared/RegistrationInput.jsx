import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Upewnij się, że Font Awesome jest załadowany
import clsx from "clsx";

const RegistrationInput = ({ register, name, placeholder, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex text-center justify-center items-center">
        <input
          {...register(name)}
          type={
            name === "password" || name === "confirmPassword"
              ? passwordVisible
                ? "text"
                : "password"
              : "text"
          }
          placeholder={placeholder}
          className={clsx(
            "w-full text-center mr-3 py-1 text-green bg-formInput rounded-md text-lg",
            error ? "border-solid border-errorText bg-red-800" : "border-none"
          )}
        />
        {(name === "password" || name === "confirmPassword") && (
          <span
            onClick={togglePasswordVisibility}
            className="cursor-pointer text-#555"
          >
            <i
              className={clsx(
                passwordVisible ? "fas fa-eye-slash" : "fas fa-eye",
                "w-0"
              )}
            ></i>
          </span>
        )}
      </div>
      {error && <p className="text-errorText text-sm">{error.message}</p>}
    </>
  );
};

export default RegistrationInput;
