import Button from "../Other/Button";
import NameContainer from "../PokemonList/NameContainer";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const PokemonEditListElement = ({ name, id, image }) => {
  const navigate = useNavigate();

  const handlePokemonEdit = () => {
    navigate(`/pokemon/edit/${name}`);
  };

  return (
    <div
      className={
        " flex flex-col w-4/5 lg:w-2/5 shadow-md py-2 px-5 rounded-lg bg-pokemon-card shadow-pokemon-card-shadow dark:bg-dark-pokemon-card dark:shadow-dark-pokemon-card-shadow"
      }
    >
      <div className="flex items-center justify-between ">
        <p className="text-2xl xl:text-3xl font-bangers mr-2">{id}.</p>
        <NameContainer parametr={name} />
        <div className="flex justify-center mx-1 lg:mx-5">
          <img className={clsx(" w-16 lg:w-28")} src={image} alt={name} />
        </div>
        <Button color="login" onClick={handlePokemonEdit}>
          EDYTUJ
        </Button>
      </div>
    </div>
  );
};

export default PokemonEditListElement;
