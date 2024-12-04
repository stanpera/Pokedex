import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import useArena from "../../../hooks/useArena";
import DeleteIcon from "./DeleteIcon";
import Confetti from "react-confetti";
import NameContainer from "../PokemonList/NameContainer";
import AbilityContainer from "../PokemonList/AbilityContainer";
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
        "relative flex flex-col items-center shadow-md py-5 lg:py-10 rounded-lg w-[240px] lg:w-[360px]",
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
            "text-sm lg:text-lg xl:text-xl font-itim absolute top-0 left-0 p-2  rounded-tl-md rounded-br-md",
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
        <img className={clsx("w-40 lg:w-64")} src={image} alt={name} />
      </div>
      {name !== null && <NameContainer parametr={name} />}
      {height !== null && (
        <div className="mt-5 w-3/4 flex justify-between">
          <div>
            <AbilityContainer parametr={height}>Height</AbilityContainer>
            <AbilityContainer parametr={weight}>Weight</AbilityContainer>
          </div>
          <div>
            <AbilityContainer parametr={baseExperience}>
              Base Experience
            </AbilityContainer>
            <AbilityContainer parametr={ability}>Ability</AbilityContainer>
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
