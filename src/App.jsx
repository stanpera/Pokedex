import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContext } from "./context/NotificationContext";
import Navigation from "./components/subpages/Navigation";
import HomePage from "./components/subpages/HomePage";
import Arena from "./components/subpages/Arena";
import Favourites from "./components/subpages/Favourites";
import Ranking from "./components/subpages/Ranking";
import Edition from "./components/subpages/Edition";
import RegistrationForm from "./components/shared/RegistrationForm";
import LoginForm from "./components/shared/LoginForm";
import Notification from "./components/shared/Notification";
import { useContext } from "react";
import { LoginProvider } from "./context/LoginContext.jsx";

function App() {
  const { notification, notificationVariant } = useContext(NotificationContext);
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="arena" element={<Arena />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="edition" element={<Edition />} />
            <Route path="registrationForm" element={<RegistrationForm />} />
            <Route path="loginForm" element={<LoginForm />} />
          </Routes>
          {notification && (
            <Notification
              variant={notificationVariant}
              message={notification}
            />
          )}
        </LoginProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
