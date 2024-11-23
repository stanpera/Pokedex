import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PokemonCard from "./PokemonCard";
import CustomPagination from "./Pagination";
import PokemonSearching from "../shared/PokemonSearching";

const PokemonList = () => {
  const itemsPerPage = 15;
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const offset = (currentPage - 1) * itemsPerPage;

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      const filteredPokemons = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredPokemons);
    }
  }, [search, data]);

  if (loading)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Trwa pobieranie danych...
      </p>
    );
  if (error)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {error}
      </p>
    );

  return (
    <>
      <PokemonSearching search={search} setSearch={setSearch} />
      <div className="flex flex-col items-center">
        <div className="flex w-4/5 flex-wrap justify-center gap-y-10 gap-x-12 mt-4">
          {filteredData.length === 0 ? (
            <p>Nie znaleziono pasujących odpowiedzi</p>
          ) : (
            filteredData.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                height={pokemon.height}
                weight={pokemon.weight}
                baseExperience={pokemon.base_experience}
                ability={
                  pokemon.abilities?.[0]?.ability?.name ||
                  "No abilities available"
                }
              />
            ))
          )}
        </div>
        {filteredData.length > 0 && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default PokemonList;





