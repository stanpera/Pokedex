import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import { NotificationContext } from "../../context/NotificationContext";
import { Navigate } from "react-router-dom"; // Jeśli chcesz przekierować użytkownika

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const { handleNotification } = useContext(NotificationContext);

  // Używamy useEffect, aby wywołać handleNotification tylko raz
  useEffect(() => {
    if (!isLoggedIn) {
      handleNotification(
        "Musisz być zalogowany, aby zobaczyć treść.",
        "secondary"
      );
    }
  }, [isLoggedIn, handleNotification]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

