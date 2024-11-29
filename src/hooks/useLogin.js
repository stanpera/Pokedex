import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

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
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userIsLoggedIn", JSON.stringify(isLoggedIn));
    if (isLoggedIn) {
      localStorage.setItem("userName", JSON.stringify(name));
    } else {
      localStorage.removeItem("userName");
    }
  }, [isLoggedIn, name]);

  const handleLogin = async () => {
    const url = `http://localhost:3000/users?name=${encodeURIComponent(
      name
    )}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        setIsLoggedIn(true);
        enqueueSnackbar("Logowanie powiodło się!", { variant: "success" });
        navigate("/");
      } else {
        enqueueSnackbar("Nieprawidłowe dane logowania.", { variant: "error" });
        setName("");
        setPassword("");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Błąd podczas logowania:", error);
      enqueueSnackbar("Wystąpił błąd podczas logowania.", { variant: "error" });
      setName("");
      setPassword("");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName("");
    setPassword("");
    enqueueSnackbar("Zostałeś pomyślnie wylogowany.", { variant: "success" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      handleLogout();
    } else {
      await handleLogin();
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
