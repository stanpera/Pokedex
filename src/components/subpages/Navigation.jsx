import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import logoPokedex from "../../icons/logoPokedex.png";
import Button from "../shared/Other/Button";
import ThemeSwitcher from "../shared/NavigationElements/ThemeSwitcher";
import UserLogo from "../shared/NavigationElements/UserLogo";
import { ThemeContext } from "../../context/ThemeContext";
import { useSnackbar } from "notistack";
import clsx from "clsx";
import NavBarIcon from "../shared/NavigationElements/NavBarIcon";

const Navigation = () => {
  const { isLoggedIn, handleSubmit, name } = useContext(LoginContext);
  const [navBar, setNavBar] = useState(false);
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

  const handleNavBar = () => {
    setNavBar((prev) => !prev);
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
      <div className="flex items-start lg:items-center">
        <Link to="/">
          <img
            src={logoPokedex}
            alt="Pokedex Logo"
            className={clsx("md:h-16 h-10")}
          />
        </Link>
      </div>
      <div>
        <div className="flex justify-end items-center">
          {isLoggedIn && <UserLogo>{name}</UserLogo>}
          <ThemeSwitcher />
        </div>
        <NavBarIcon onClick={handleNavBar} />
        <div
          className={clsx(
            "flex flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0",
            {
              "hidden lg:flex": !navBar,
              flex: navBar,
            }
          )}
        >
          <Button color="menu" onClick={() => handleButtonClick("/favourites")}>
            ULUBIONE
          </Button>
          <Button color="menu" onClick={() => handleButtonClick("/arena")}>
            ARENA
          </Button>
          <Button color="menu" onClick={() => handleButtonClick("/ranking")}>
            RANKING
          </Button>
          <Button color="menu" onClick={() => handleButtonClick("/edit")}>
            EDYCJA
          </Button>
          {!isLoggedIn && (
            <Button to="loginForm" color="login">
              ZALOGUJ
            </Button>
          )}
          {!isLoggedIn && (
            <Button to="registrationForm" color="login">
              ZAREJESTRUJ SIĘ
            </Button>
          )}
          {isLoggedIn && (
            <Button color="logout" onClick={handleSubmit}>
              WYLOGUJ
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
