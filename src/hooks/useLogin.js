import { useEffect, useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("userName");
    return storedName ? JSON.parse(storedName) : ""; 
  });

  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem("userIsLoggedIn");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userIsLoggedIn", JSON.stringify(isLoggedIn));
    if (isLoggedIn) {
      localStorage.setItem("userName", JSON.stringify(name)); 
    } else {
      localStorage.removeItem("userName"); 
    }
  }, [isLoggedIn, name]);

  const handleSubmit = async (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      const url = `http://localhost:3000/users?name=${name}&password=${password}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && name && password) {
          setIsLoggedIn(true);
          handleNotification("Logowanie powiodło się!");
          setTimeout(() => navigate("/"), 2000);
        } else {
          handleNotification("Nieprawidłowe dane logowania.", "secondary");
          setIsLoggedIn(false);
        }
      } catch (error) {
        handleNotification("Wystąpił błąd podczas logowania.", "secondary");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      setPassword("");
      setName("");
      handleNotification("Zostałeś pomyślnie wylogowany.");
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
