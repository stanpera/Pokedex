import { useParams } from "react-router-dom";
import PokemonDetailsCard from "./PokemonDetailsCard";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data, loading, error } = useFetchPokemonList(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

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
    <PokemonDetailsCard
      id={data.name}
      name={data.name}
      image={data.sprites?.other["official-artwork"].front_default}
      height={data.height}
      weight={data.weight}
      experience={data.base_experience}
      ability={data.abilities?.[0]?.ability?.name}
    />
  );
};

export default PokemonDetailsPage;
