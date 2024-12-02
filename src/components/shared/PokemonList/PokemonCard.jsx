import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({
  id,
  name,
  image,
  height,
  weight,
  baseExperience,
  ability,
  win,
  lost,
}) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={clsx(
        "relative flex flex-col items-center shadow-md py-10 rounded-lg w-[360px] hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out cursor-pointer",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow"
      )}
    >
      {(win > 0 || lost > 0) && (
        <div className={clsx("font-itim absolute top-0 left-0 p-2  rounded-tl-md rounded-br-md", theme === "light" ? "bg-main-gray font-bold" : "bg-dark-black")}>
          <p>W: {win}</p>
          <p>L: {lost}</p>
        </div>
      )}
      <div className="flex justify-center">
        <img className="w-64" src={image} alt={name} />
      </div>
      <h3
        className={clsx(
          "text-3xl text-center leading-none capitalize font-bangers",
          theme === "light"
            ? "text-main-text-color"
            : "text-dark-main-text-color"
        )}
      >
        {name}
      </h3>
      <div className="mt-5 w-3/4 flex justify-between">
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
              "text-xl text-center font-itim",
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
            {baseExperience}
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
              "text-xl text-center font-itim",
              theme === "light"
                ? "text-pokemon-card-details"
                : "text-dark-second-text-color"
            )}
          >
            {ability}
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
      </div>
    </div>
  );
};

export default PokemonCard;
