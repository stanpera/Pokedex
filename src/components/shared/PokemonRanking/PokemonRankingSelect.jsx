import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const PokemonRankingSelect = ({ onChange, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "flex justify-center py-2 shadow-md rounded-md ",
        theme === "light"
          ? "bg-searching-pokemon shadow-searching-pokemon-shadow"
          : "bg-dark-red shadow-dark-red-shadow"
      )}
    >
      <select
        className={clsx(
          "h-10  rounded p-1  placeholder:text-lg text-center text-base lg:text-xl mr-3",
          theme === "light"
            ? "bg-searching-pokemon-input text-white"
            : "bg-dark-searching-pokemon-input text-dark-main-text-color"
        )}
        onChange={onChange}
      >
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="win"
        >
          Wygrane
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="lost"
        >
          Przegrane
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="name"
        >
          Nazwa
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="height"
        >
          Wzrost
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="weight"
        >
          Waga
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
          value="baseExperience"
        >
          Doświadczenie
        </option>
        <option
          className={clsx(
            theme === "light" ? "bg-second-red" : "bg-dark-second-red"
          )}
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
