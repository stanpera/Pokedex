import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import clsx from "clsx";

const PokemonSearching = ({ search, setSearch }) => {
  const { theme } = useContext(ThemeContext);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div
      className={clsx(
        "flex justify-center py-2 mb-3 shadow-md rounded-md",
        theme === "light" ? "bg-searching-pokemon shadow-searching-pokemon-shadow" : "bg-dark-red shadow-dark-red-shadow"
      )}
    >
      <input
        className="rounded p-1 h-10 w-72 bg-searching-pokemon-input placeholder:text-white placeholder:text-lg text-center text-xl"
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Znajdź Pokemona..."
      />
    </div>
  );
};

export default PokemonSearching;
