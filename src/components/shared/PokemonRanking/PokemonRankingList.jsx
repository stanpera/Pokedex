import { useState, useEffect } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonRankingElement from "./PokemonRankingElement";
import PokemonRankingSelect from "./PokemonRankingSelect";

const PokemonRankingList = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [descending, setDescending] = useState(true);
  const [sortOption, setSortOption] = useState("win");

  const { data, loading, error } = useFetchPokemonList(
    "http://localhost:3000/updatedPokemons"
  );
  console.log(descending);
  const toggleSortDirection = () => {
    setDescending((prev) => !prev);
  };
  const sortData = (data, option) => {
    if (descending) {
      const sorted = [...data].sort((a, b) => {
        if (option === "name" || option === "ability") {
          return b[option].localeCompare(a[option]);
        } else {
          return b[option] - a[option];
        }
      });
      return sorted;
    } else {
      const sorted = [...data].sort((b, a) => {
        if (option === "name" || option === "ability") {
          return b[option].localeCompare(a[option]);
        } else {
          return b[option] - a[option];
        }
      });
      return sorted;
    }
  };

  useEffect(() => {
    if (data) {
      const sortedData = sortData(data, sortOption);
      setFilteredData(sortedData);
    }
  }, [data, , sortOption, descending]);

  const handleSelectChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <>
      <PokemonRankingSelect
        onChange={handleSelectChange}
        onClick={toggleSortDirection}
      />
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col w-6/8 md:w-3/5 justify-center gap-y-10 gap-x-12 m-10 ">
          {filteredData.map((pokemon, index) => (
            <PokemonRankingElement
              key={pokemon.id}
              id={index + 1}
              name={pokemon.name}
              image={pokemon.image}
              height={pokemon.height}
              weight={pokemon.weight}
              baseExperience={pokemon.baseExperience}
              ability={pokemon.ability}
              win={pokemon.win}
              lost={pokemon.lost}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonRankingList;



