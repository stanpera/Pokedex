import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const PokemonRankingSelect = ({ onChange, onClick }) => {
  return (
    <div
      className={
        "flex justify-center py-2 shadow-md rounded-md bg-searching-pokemon shadow-searching-pokemon-shadow dark:bg-dark-red dark:shadow-dark-red-shadow"
      }
    >
      <select
        className={
          "h-10  rounded p-1  placeholder:text-lg text-center text-base lg:text-xl mr-3 bg-searching-pokemon-input text-white dark:bg-dark-searching-pokemon-input dark:text-dark-main-text-color"
        }
        onChange={onChange}
      >
        <option className={"bg-second-red dark:bg-dark-second-red"} value="win">
          Wygrane
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="lost"
        >
          Przegrane
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="name"
        >
          Nazwa
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="height"
        >
          Wzrost
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="weight"
        >
          Waga
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="baseExperience"
        >
          Doświadczenie
        </option>
        <option
          className={"bg-second-red dark:bg-dark-second-red"}
          value="ability"
        >
          Umiejętności
        </option>
      </select>
      <button onClick={onClick}>
        <FontAwesomeIcon className="text-xl" icon={faSort} />
      </button>
    </div>
  );
};

export default PokemonRankingSelect;
