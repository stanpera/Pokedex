import { createContext, useState } from "react";
import useLogin from "../hooks/useLogin"; // Importujemy hook `useLogin`

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const {
    handleSubmit,
    setName,
    setPassword,
    setIsLoggedIn,
    name,
    password,
    isLoggedIn,
  } = useLogin(); 

  return (
    <LoginContext.Provider
      value={{
        handleSubmit,
        setName,
        setPassword,
        setIsLoggedIn,
        name,
        password,
        isLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};



