import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import useArena from "../../../hooks/Arena/useArena";
import DeleteIcon from "../../../icons/DeleteIcon";
import Confetti from "react-confetti";

const PokemonArenaCard = ({
  id,
  name,
  image,
  height,
  weight,
  baseExperience,
  ability,
  win,
  lost,
  onArenaChange,
  isWinner,
  isLoser,
}) => {
  const { theme } = useContext(ThemeContext);
  const { isArena, toggleArena } = useArena(name);
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      setDimensions({ width: offsetWidth - 10, height: offsetHeight - 10 });
    }
  }, [cardRef.current]);

  const handleArena = async () => {
    if (isArena && !isWinner && !isLoser) {
      await toggleArena({
        id,
        name,
        image,
        height,
        weight,
        baseExperience: baseExperience,
        ability: ability || "No abilities available",
      });

      if (onArenaChange) {
        onArenaChange();
      }
    }
  };

  return (
    <div
      ref={cardRef} // Przypisanie ref do kontenera
      className={clsx(
        "relative flex flex-col items-center shadow-md py-10 rounded-lg w-[360px]",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow",
        name === null && "justify-center h-[510px]",
        name !== null &&
          "hover:shadow-lg transform transition-all duration-200 ease-in-out cursor-pointer hover:scale-105",
        name === null && "opacity-50",
        isLoser && "opacity-50 duration-500 ease-in-out",
        isWinner && "border-exit-arena border-4 rounded-lg"
      )}
    >
      {(win > 0 || lost > 0) && (
        <div
          className={clsx(
            "font-itim absolute top-0 left-0 p-2  rounded-tl-md rounded-br-md",
            theme === "light" ? "bg-main-gray font-bold" : "bg-dark-black"
          )}
        >
          <p>W: {win}</p>
          <p>L: {lost}</p>
        </div>
      )}
      {name !== null && (
        <DeleteIcon
          onClick={handleArena}
          className="absolute top-0 right-0 m-2"
        />
      )}
      <div className="flex justify-center">
        <img className={clsx("w-64")} src={image} alt={name} />
      </div>
      {name !== null && (
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
      )}
      {height !== null && (
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
      )}
      {isWinner && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default PokemonArenaCard;
