import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/subpages/Navigation.jsx";
import HomePage from "./components/subpages/HomePage";
import Arena from "./components/subpages/Arena";
import Favourites from "./components/subpages/Favourites";
import Ranking from "./components/subpages/Ranking";
import Edition from "./components/subpages/Edition";
import RegistrationForm from "./components/shared/Registration/RegistrationForm.jsx";
import LoginForm from "./components/shared/Login/LoginForm.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";
import PokemonDetailsPage from "./components/shared/PokemonDetails/PokemonDetailsPage.jsx";
import PokemonEditForm from "./components/shared/PokemonEdition/PokemonEditiForm.jsx";

function App() {
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
            <Route path="pokemon/edit/:name" element={<PokemonEditForm />} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
