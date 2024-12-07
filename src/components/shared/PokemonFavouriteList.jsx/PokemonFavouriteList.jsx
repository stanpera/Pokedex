import { useEffect, useState } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonCard from "../PokemonList/PokemonCard";
import CustomPagination from "../Other/CustomPagination";
import PokemonSearching from "../Other/PokemonSearching";
import Notification from "../Other/Notification";
import Loading from "../Other/Loading";
import usePageNumber from "../../../hooks/usePageNumber";

const PokemonFavouriteList = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const offset = (currentPage - 1) * itemsPerPage;
  const { totalAmountPages } = usePageNumber({
    jsonUrl: "http://localhost:3000/favouritePokemons",
  });
  const totalPages = totalAmountPages;

  const { data, loading, error } = useFetchPokemonList(
    `http://localhost:3000/favouritePokemons?_start=${offset}&_limit=${itemsPerPage}`
  );

  useEffect(() => {
    if (data) {
      const filteredPokemons = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredPokemons);
    }
  }, [data, search]);

  if (loading) {
    return <Loading />;
  }
  if (error) return <Notification variant="secondery" message={error} />;

  return (
    <>
      <PokemonSearching search={search} setSearch={setSearch} />
      <div className="relative flex flex-col items-center mt-10">
        <div className="flex w-4/5 flex-wrap justify-center gap-y-10 gap-x-12 mb-10">
          {filteredData.length === 0 ? (
            <Notification
              variant="primary"
              message="Przejdź do strony głównej i dodaj pokemony do ulubionych"
            />
          ) : (
            filteredData.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={
                  pokemon.sprites?.other["official-artwork"].front_default ||
                  pokemon.image
                }
                height={pokemon.height}
                weight={pokemon.weight}
                baseExperience={
                  pokemon.base_experience || pokemon.baseExperience
                }
                ability={
                  pokemon.abilities?.[0]?.ability?.name ||
                  pokemon.ability ||
                  "No abilities available"
                }
                win={pokemon.win}
                lost={pokemon.lost}
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

export default PokemonFavouriteList;
