import { useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { handleNotification } = useContext(NotificationContext);

  const handleSubmit = async (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      const url = `http://localhost:3000/users?name=${name}&password=${password}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (name && password) {
          setIsLoggedIn(true); 
          handleNotification("Logowanie powiodło się!");
        } else {
          handleNotification("Nieprawidłowe dane logowania", "secondary");
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Failed to connect to the server");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      setPassword("");
      setName("");
      handleNotification("Użytkownik został wylogowany");
    }
  };

  return {
    handleSubmit,
    setName,
    setPassword,
    setIsLoggedIn,
    name,
    password,
    isLoggedIn,
  };
};

export default useLogin;
