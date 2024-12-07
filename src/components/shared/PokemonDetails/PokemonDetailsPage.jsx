import { useParams } from "react-router-dom";
import PokemonDetailsCard from "./PokemonDetailsCard";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import Notification from "../Other/Notification";
import Loading from "../Other/Loading";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data, loading, error } = useFetchPokemonList(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Notification variant="secondary" message={error} />;
  }

  return (
    <div className="flex justify-center">
      <PokemonDetailsCard
        id={data.name}
        name={data.name}
        image={
          data.sprites?.other["official-artwork"].front_default || data.image
        }
        height={data.height}
        weight={data.weight}
        experience={data.base_experience || data.baseExperience}
        ability={data.abilities?.[0]?.ability?.name || data.ability}
        win={data.win}
        lost={data.lost}
      />
    </div>
  );
};

export default PokemonDetailsPage;
