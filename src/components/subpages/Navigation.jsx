import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import logoPokedex from "../../icons/logoPokedex.png";
import Button from "../shared/Button";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import UserLogo from "../shared/UserLogo";

const Navigation = () => {
  const { isLoggedIn, name, logout } = useContext(LoginContext);

  return (
    <nav className="flex w-full top-0 justify-between py-5 px-10 bg-navigation-gradient shadow-md shadow-navigation-shadow">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoPokedex} alt="Pokedex Logo" className="h-20" />
        </Link>
      </div>
      <div>
        <div className="flex justify-end items-center">
          {isLoggedIn && <UserLogo>{name}</UserLogo>}
          <ThemeSwitcher />
        </div>
        <div className="flex space-x-4 max-sm:flex-col">
          <Button to="favourites" color="menu" size="medium">
            ULUBIONE
          </Button>
          <Button to="arena" color="menu" size="medium">
            ARENA
          </Button>
          <Button to="ranking" color="menu" size="medium">
            RANKING
          </Button>
          <Button to="edition" color="menu" size="medium">
            EDYCJA
          </Button>
          {!isLoggedIn && (
            <Button to="loginForm" color="login" size="medium">
              ZALOGUJ
            </Button>
          )}
          {isLoggedIn && (
            <Button color="logout" size="medium" onClick={logout}>
              WYLOGUJ
            </Button>
          )}
          <Button to="registrationForm" color="login" size="medium">
            ZAREJESTRUJ SIĘ
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
