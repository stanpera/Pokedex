import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import RankingNumber from "./RankingNumber";
import NameContainer from "../PokemonList/NameContainer";
import AbilityContainer from "../PokemonList/AbilityContainer";

const PokemonRankingElement = ({
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

  return (
    <div
      className={clsx(
        "relative flex-wrap shadow-md py-2 px-5 rounded-lg gap-x-10",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow",
        id === 1 && "border-solid border-2 border-gold-statistic",
        id === 2 && "border-solid border-2 border-silver-statistic",
        id === 3 && "border-solid border-2 border-brown-statistic"
      )}
    >
      <div className="flex items-center justify-center ">
        <RankingNumber id={id} />
        <div className="flex justify-center mx-1 lg:mx-5">
          <img className={clsx(" w-24 lg:w-32")} src={image} alt={name} />
        </div>
        <NameContainer parametr={name} />
      </div>
      <div className="mt-5 flex gap-x-1 lg:gap-x-10 justify-center">
        <AbilityContainer parametr={height}>Height</AbilityContainer>
        <AbilityContainer parametr={weight}>Weight</AbilityContainer>
        <AbilityContainer parametr={baseExperience}>
          Base Experience
        </AbilityContainer>
        <AbilityContainer parametr={ability}>Ability</AbilityContainer>
        {(win > 0 || lost > 0) && (
          <>
            <AbilityContainer parametr={win}>Wins</AbilityContainer>
            <AbilityContainer parametr={lost}>Losts</AbilityContainer>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonRankingElement;
