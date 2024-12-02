import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Upewnij się, że Font Awesome jest załadowany
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const LoginInput = ({
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex text-center justify-center items-center">
        <input
          type={
            placeholder === "Wpisz hasło"
              ? passwordVisible
                ? "text"
                : "password"
              : "text"
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            "w-full text-center mr-3 py-1 text-green rounded-md text-lg",
            error ? "border-solid border-2 border-errorText" : "border-none",
            theme === "light"
              ? "bg-form-input"
              : "bg-dark-form-input text-dark-black"
          )}
        />
        {placeholder === "Wpisz hasło" && (
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
    </>
  );
};

export default LoginInput;
