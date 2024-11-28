import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContext } from "./context/NotificationContext";
import Navigation from "./components/subpages/Navigation.jsx";
import HomePage from "./components/subpages/HomePage";
import Arena from "./components/subpages/Arena";
import Favourites from "./components/subpages/Favourites";
import Ranking from "./components/subpages/Ranking";
import Edition from "./components/subpages/Edition";
import RegistrationForm from "./components/shared/Registration/RegistrationForm.jsx";
import LoginForm from "./components/shared/Login/LoginForm.jsx";
import Notification from "./components/shared/Notification";
import { useContext } from "react";
import { LoginProvider } from "./context/LoginContext.jsx";
import PokemonDetailsPage from "./components/shared/PokemonDetails/PokemonDetailsPage.jsx";

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
            <Route path="pokemon/:name" element={<PokemonDetailsPage />} />
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
