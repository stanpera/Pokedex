import logoPokedex from "../../icons/logoPokedex.png";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import UserLogo from "../shared/UserLogo";

const Navigation = () => {
  return (
    <nav className="flex w-full top-0 justify-between py-5 px-10 bg-navigation-gradient  shadow-md shadow-navigation-shadow">
      <div className="flex items-center">
        <Link to="/">
          <img src={logoPokedex} alt="Pokedex Logo" className="h-20" />
        </Link>
      </div>
      <div>
        <div className="flex justify-end items-center" >
          <UserLogo>Stefan</UserLogo>
          <ThemeSwitcher />
        </div>
        <div className="flex space-x-4 max-sm:flex-col">
          <Button to="favourites" color="menu" size="large">
            ULUBIONE
          </Button>
          <Button to="arena" color="menu" size="large">
            ARENA
          </Button>
          <Button to="ranking" color="menu" size="large">
            RANKING
          </Button>
          <Button to="edition" color="menu" size="large">
            EDYCJA
          </Button>
          <Button color="logout" size="large">WYLOGUJ</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;



