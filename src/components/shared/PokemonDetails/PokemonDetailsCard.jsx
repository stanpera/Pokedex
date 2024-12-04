import clsx from "clsx";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { ThemeContext } from "../../../context/ThemeContext";
import useFavourite from "../../../hooks/useFavourite";
import useArena from "../../../hooks/useArena";
import ArenaSkullIcon from "./ArenaSkullIcon";
import AbilityContainer from "../PokemonList/AbilityContainer";
import HeartIcon from "./HeartIcon";

const PokemonDetailsCard = ({
  id,
  image,
  name,
  height,
  weight,
  experience,
  ability,
  win,
  lost,
}) => {
  const { theme } = useContext(ThemeContext);
  const { isFavorite, toggleFavourite } = useFavourite(name);
  const { isArena, toggleArena } = useArena(name);
  const { isLoggedIn } = useContext(LoginContext);

  const handleFavourites = () => {
    toggleFavourite({
      id,
      name,
      image,
      height,
      weight,
      baseExperience: experience,
      ability: ability || "No abilities available",
    });
  };
  const handleArena = () => {
    toggleArena({
      id,
      name,
      image,
      height,
      weight,
      baseExperience: experience,
      ability: ability || "No abilities available",
      win: 0,
      lost: 0,
    });
  };
  return (
    <div
      className={clsx(
        "flex relative justify-between items-center rounded-lg mt-20 p-10 bg-red-500 w-3/5 gap-x-16cursor-pointer",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow"
      )}
    >
      {isLoggedIn && (
        <div className="flex gap-x-5 absolute top-6 right-6">
          <HeartIcon isFavorite={isFavorite} onClick={handleFavourites} />
          <ArenaSkullIcon isArena={isArena} onClick={handleArena} />
        </div>
      )}
      <div>
        <img src={image} alt={name} className="w-96 mt-4" />
      </div>
      <div className="flex flex-col items-center w-2/4">
        <h3 className="text-4xl capitalize mb-10 font-bangers">{name}</h3>
        <div className="flex w-full justify-around">
          <div>
            <AbilityContainer parametr={height}>Height</AbilityContainer>
            <AbilityContainer parametr={weight}>Weight</AbilityContainer>
          </div>
          <div>
            <AbilityContainer parametr={experience}>
              Base Experience
            </AbilityContainer>
            <AbilityContainer parametr={ability}>Ability</AbilityContainer>
          </div>
          {isLoggedIn && (
            <div>
              <>
                <AbilityContainer parametr={win ? win : 0}>
                  Wins
                </AbilityContainer>
                <AbilityContainer parametr={lost ? lost : 0}>
                  Losts
                </AbilityContainer>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
