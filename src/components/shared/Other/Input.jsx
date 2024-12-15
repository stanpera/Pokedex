import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Upewnij się, że Font Awesome jest załadowany
import clsx from "clsx";

const Input = ({
  register,
  name,
  placeholder,
  error,
  inputType,
  onChange,
  value,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex text-center justify-center items-center">
        <input
          {...(register ? register(name) : { name, value, onChange })}
          type={
            inputType === "password"
              ? passwordVisible
                ? "text"
                : "password"
              : inputType
          }
          placeholder={placeholder}
          className={clsx(
            "w-full text-center mr-3 py-1 text-green rounded-md text-lg bg-form-input dark:bg-dark-form-input dark:text-dark-black",
            error ? "border-solid border-2 border-error-text" : "border-none"
          )}
        />
        {inputType === "password" && (
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
      {error && (
        <p className={"text-base text-center text-main-red"}>{error.message}</p>
      )}
    </>
  );
};

export default Input;



