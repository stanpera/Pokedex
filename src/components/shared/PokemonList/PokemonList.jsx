import { useEffect, useState } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonCard from "./PokemonCard";
import CustomPagination from "../CustomPagination";
import PokemonSearching from "../PokemonSearching";
import Notification from "../Notification";
import Loading from "../Loading";

const PokemonList = ({ url }) => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const offset = (currentPage - 1) * itemsPerPage;

  const { data, loading, error } = useFetchPokemonList(
    url === "https://pokeapi.co/api/v2/pokemon"
      ? `${url}?offset=${offset}&limit=${itemsPerPage}`
      : `${url}?_start=${offset}&_limit=${itemsPerPage}`
  );

  useEffect(() => {
    if (data) {
      const filteredPokemons = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredPokemons);

      if (url === "http://localhost:3000/favouritePokemons") {
        fetch("http://localhost:3000/favouritePokemons", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const totalItems = data.length;
            const pages = Math.ceil(totalItems / itemsPerPage);
            setTotalPages(pages);
          })
          .catch((error) => console.error("Error fetching data:", error));
      } else if (url === "http://localhost:3000/arena") {
        fetch("http://localhost:3000/arena", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const totalItems = data.length;
            const pages = Math.ceil(totalItems / itemsPerPage);
            setTotalPages(pages);
          })
          .catch((error) => console.error("Error fetching data:", error));
      } else {
        setTotalPages(10);
      }
    }
  }, [data, search, url]);

  if (loading) {
    return <Loading />;
  }
  if (error) return <Notification variant="secondery" message={error} />;

  return (
    <>
      {filteredData.length > 0 && (
        <PokemonSearching search={search} setSearch={setSearch} />
      )}
      <div className="relative flex flex-col items-center mt-10">
        <div className="flex w-4/5 flex-wrap justify-center gap-y-10 gap-x-12 mb-10">
          {filteredData.length === 0 &&
          url === "http://localhost:3000/favouritePokemons" ? (
            <Notification
              variant="primary"
              message="Przejdź do strony głównej i dodaj pokemony do ulubionych"
            />
          ) : filteredData.length === 0 &&
            url === "http://localhost:3000/arena" ? (
            <Notification
              variant="primary"
              message=" Przejdź do strony głównej i dodaj pokemony do areny"
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
              />
            ))
          )}
        </div>
        {filteredData.length > 2 && (
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
