import PokemonEditionListElement from "./PokemonEditionListElement";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import { useState } from "react";
import CustomPagination from "../Other/CustomPagination";
import Loading from "../Other/Loading";
import Notification from "../Other/Notification";

const PokemonEditionList = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  const urlApi = "https://pokeapi.co/api/v2/pokemon";
  const { data, loading, error } = useFetchPokemonList(
    `${urlApi}?offset=${offset}&limit=${itemsPerPage}`
  );

  if (loading) {
    return <Loading />;
  }
  if (error) return <Notification variant="secondery" message={error} />;

  return (
    <div>
      <div className="flex flex-col items-center gap-y-5">
        {data?.map((pokemon, index) => (
          <PokemonEditionListElement
            key={index}
            id={index + 1}
            name={pokemon.name}
            image={
              pokemon.sprites?.other["official-artwork"].front_default ||
              pokemon.image
            }
            win={pokemon.win}
          />
        ))}
      </div>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PokemonEditionList;



