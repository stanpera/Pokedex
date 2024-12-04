import Button from "../Other/Button";
import NameContainer from "../PokemonList/NameContainer";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const PokemonEditionListElement = ({ name, id, image, win }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handlePokemonEdit = () => {
    navigate(`/pokemon/edit/${name}`);
  };

  return (
    <div
      className={clsx(
        " flex flex-col w-4/5 lg:w-2/5 shadow-md py-2 px-5 rounded-lg",
        theme === "light"
          ? "bg-pokemon-card shadow-pokemon-card-shadow"
          : "bg-dark-pokemon-card shadow-dark-pokemon-card-shadow"
      )}
    >
      <div className="flex items-center justify-between ">
        <p className="text-2xl xl:text-3xl font-bangers mr-2">{id}.</p>
        <NameContainer parametr={name} />
        {win > 0 && <p>{win}</p>}
        <div className="flex justify-center mx-1 lg:mx-5">
          <img className={clsx(" w-16 lg:w-28")} src={image} alt={name} />
        </div>
        <Button color="login" onClick={handlePokemonEdit}>EDYTUJ</Button>
      </div>
    </div>
  );
};

export default PokemonEditionListElement;
