import PokemonEditListElement from "./PokemonEditListElement";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import { useState } from "react";
import CustomPagination from "../Other/CustomPagination";
import Loading from "../Other/Loading";
import Notification from "../Other/Notification";
import Button from "../Other/Button";
import { useNavigate } from "react-router-dom";

const PokemonEditList = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  const navigate = useNavigate();
  const urlApi = "https://pokeapi.co/api/v2/pokemon";
  const { data, loading, error } = useFetchPokemonList(
    `${urlApi}?offset=${offset}&limit=${itemsPerPage}`
  );

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
