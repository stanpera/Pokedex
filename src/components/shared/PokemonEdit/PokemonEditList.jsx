import PokemonEditListElement from "./PokemonEditListElement";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import { useState } from "react";
import CustomPagination from "../Other/CustomPagination";
import Loading from "../Other/Loading";
import Notification from "../Other/Notification";
import Button from "../Other/Button";
import { useNavigate } from "react-router-dom";
import usePageNumber from "../../../hooks/usePageNumber";

const PokemonEditList = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * itemsPerPage;
  const createdPokemonOffset = (currentPage - 11) * itemsPerPage;
  const navigate = useNavigate();
  const { totalAmountPages } = usePageNumber({
    jsonUrl: `http://localhost:3000/updatedPokemons?isCustomPokemon_gte=1&_start=0&_limit=10`,
    apiUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150",
  });
  const totalPages = totalAmountPages;
  const url =
    offset <= 149
      ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`
      : `http://localhost:3000/updatedPokemons?isCustomPokemon_gte=1&_start=${createdPokemonOffset}&_limit=${itemsPerPage}`;
  const { data, loading, error } = useFetchPokemonList(url);

  const handlePokemonCreate = () => {
    navigate(`/createPokemonForm`);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) return <Notification variant="secondery" message={error} />;

  return (
    <div className="flex flex-col gap-y-5">
      <Button
        onClick={handlePokemonCreate}
        color="menu"
        className="flex self-center"
      >
        STWÓRZ POKEMONA
      </Button>
      <div className="flex flex-col items-center gap-y-5">
        {data?.map((pokemon, index) => (
          <PokemonEditListElement
            key={index}
            id={index + 1}
            name={pokemon.name}
            image={
              pokemon.sprites?.other["official-artwork"].front_default ||
              pokemon.image
            }
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

export default PokemonEditList;
