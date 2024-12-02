import clsx from "clsx";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useFavourite from "../../../hooks/useFavourite";
import useArena from "../../../hooks/Arena/useArena";
import ArenaSkullIcon from "../../../icons/ArenaSkullIcon";
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
          <div className="cursor-pointer" onClick={handleFavourites}>
            <FontAwesomeIcon
              icon={faHeart}
              className={clsx(
                "text-3xl",
                isFavorite
                  ? theme === "light"
                    ? "text-main-red"
                    : "text-dark-red"
                  : theme === "light"
                  ? "text-main-gray"
                  : "text-dark-second-text-color"
              )}
            />
          </div>
          <ArenaSkullIcon isArena={isArena} onClick={handleArena} />
        </div>
      )}
      <div>
        <img src={image} alt={name} className="w-96 mt-4" />
      </div>
      <div className="flex flex-col items-center w-2/4">
        <h3 className="text-4xl capitalize mb-10 font-bangers">
          {name}
        </h3>
        <div className="flex w-full justify-around">
          <div>
            <p
              className={clsx(
                "text-xl text-center font-itim mb-2",
                theme === "light"
                  ? "text-pokemon-card-details"
                  : "text-dark-second-text-color"
              )}
            >
              {height}
              <span
                className={clsx(
                  "block",
                  theme === "light"
                    ? "text-main-text-color"
                    : "text-dark-main-text-color"
                )}
              >
                Height
              </span>
            </p>
            <p
              className={clsx(
                "text-xl text-center font-itim mt-6",
                theme === "light"
                  ? "text-pokemon-card-details"
                  : "text-dark-second-text-color"
              )}
            >
              {weight}
              <span
                className={clsx(
                  "block",
                  theme === "light"
                    ? "text-main-text-color"
                    : "text-dark-main-text-color"
                )}
              >
                Weight
              </span>
            </p>
          </div>
          <div>
            <p
              className={clsx(
                "text-xl text-center font-itim mb-2",
                theme === "light"
                  ? "text-pokemon-card-details"
                  : "text-dark-second-text-color"
              )}
            >
              {experience}
              <span
                className={clsx(
                  "block",
                  theme === "light"
                    ? "text-main-text-color"
                    : "text-dark-main-text-color"
                )}
              >
                Base Experience
              </span>
            </p>
            <p
              className={clsx(
                "text-xl text-center font-itim mt-6",
                theme === "light"
                  ? "text-pokemon-card-details"
                  : "text-dark-second-text-color"
              )}
            >
              {ability || "No abilities available"}
              <span
                className={clsx(
                  "block",
                  theme === "light"
                    ? "text-main-text-color"
                    : "text-dark-main-text-color"
                )}
              >
                Ability
              </span>
            </p>
          </div>
          {isLoggedIn && (
            <div>
              <p
                className={clsx(
                  "text-xl text-center font-itim mb-2",
                  theme === "light"
                    ? "text-pokemon-card-details"
                    : "text-dark-second-text-color"
                )}
              >
                {win ? win : 0}
                <span
                  className={clsx(
                    "block",
                    theme === "light"
                      ? "text-main-text-color"
                      : "text-dark-main-text-color"
                  )}
                >
                  Wins:
                </span>
              </p>
              <p
                className={clsx(
                  "text-xl text-center font-itim mt-6",
                  theme === "light"
                    ? "text-pokemon-card-details"
                    : "text-dark-second-text-color"
                )}
              >
                {lost ? lost : 0}
                <span
                  className={clsx(
                    "block",
                    theme === "light"
                      ? "text-main-text-color"
                      : "text-dark-main-text-color"
                  )}
                >
                  Losts:
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
