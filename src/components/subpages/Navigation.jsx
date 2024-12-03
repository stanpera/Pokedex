import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import logoPokedex from "../../icons/logoPokedex.png";
import Button from "../shared/Other/Button";
import ThemeSwitcher from "../shared/NavigationElements/ThemeSwitcher";
import UserLogo from "../shared/NavigationElements/UserLogo";
import { ThemeContext } from "../../context/ThemeContext";
import { useSnackbar } from "notistack";
import clsx from "clsx";

const Navigation = () => {
  const { isLoggedIn, handleSubmit, name } = useContext(LoginContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleButtonClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      enqueueSnackbar("Musisz być zalogowany, aby zobaczyć tę stronę.", {
        variant: "info",
      });
    }
  };

  return (
    <nav
      className={clsx(
        "flex w-full top-0 justify-between py-5 px-10 shadow-md",
        theme === "light"
          ? "bg-navigation-gradient shadow-navigation-shadow"
          : "bg-dark-navigation-gradient shadow-dark-black"
      )}
    >
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
          <Button
            color="menu"
            size="medium"
            onClick={() => handleButtonClick("/favourites")}
          >
            ULUBIONE
          </Button>
          <Button
            color="menu"
            size="medium"
            onClick={() => handleButtonClick("/arena")}
          >
            ARENA
          </Button>
          <Button
            color="menu"
            size="medium"
            onClick={() => handleButtonClick("/ranking")}
          >
            RANKING
          </Button>
          <Button
            color="menu"
            size="medium"
            onClick={() => handleButtonClick("/edition")}
          >
            EDYCJA
          </Button>
          {!isLoggedIn && (
            <Button to="loginForm" color="login" size="medium">
              ZALOGUJ
            </Button>
          )}
          {!isLoggedIn && (
            <Button to="registrationForm" color="login" size="medium">
              ZAREJESTRUJ SIĘ
            </Button>
          )}
          {isLoggedIn && (
            <Button color="logout" size="medium" onClick={handleSubmit}>
              WYLOGUJ
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
