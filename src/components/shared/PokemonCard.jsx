import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import clsx from "clsx";

const PokemonCard = ({
  name,
  image,
  height,
  weight,
  baseExperience,
  ability,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "flex flex-col items-center shadow-md py-10 rounded-lg w-[360px] hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow"
      )}
    >
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
                : "text-dark-pokemon-card-details"
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
                : "text-dark-pokemon-card-details"
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
                : "text-dark-pokemon-card-details"
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
                : "text-dark-pokemon-card-details"
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
