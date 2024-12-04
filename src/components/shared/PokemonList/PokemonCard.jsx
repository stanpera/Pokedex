import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import AbilityContainer from "./AbilityContainer";
import NameContainer from "./NameContainer";
const PokemonCard = ({
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
        "relative flex flex-col items-center shadow-md py-5 lg:py-10 rounded-lg w-[240px] lg:w-[360px] hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out cursor-pointer",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow"
      )}
    >
      {(win > 0 || lost > 0) && (
        <div
          className={clsx(
            "text-base lg:text-lg xl:text-xl font-itim absolute top-0 left-0 p-2  rounded-tl-md rounded-br-md",
            theme === "light" ? "bg-main-gray font-bold" : "bg-dark-black"
          )}
        >
          <p>W: {win}</p>
          <p>L: {lost}</p>
        </div>
      )}
      <div className="flex justify-center">
        <img className={clsx("w-40 lg:w-64")} src={image} alt={name} />
      </div>
      <NameContainer parametr={name} />
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
    </div>
  );
};

export default PokemonCard;
