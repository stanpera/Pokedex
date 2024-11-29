import { useState } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonArenaCard from "./PokemonArenaCard";
import Notification from "../Notification";
import Loading from "../Loading";
import logoPokedex from "../../../icons/logoPokedex.png";
import FightSkullIcon from "../../../icons/FightSkullIcon";

const PokemonArenaList = () => {
  const [refreshKey, setRefreshKey] = useState(0); // Klucz do odświeżania
  const { data, loading, error } = useFetchPokemonList(
    `http://localhost:3000/arena?refreshKey=${refreshKey}`
  );

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleClick = () => {
    if (!disabled) {
      console.log("Fight!");
      }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Notification variant="secondary" message={error} />;
  }

  const pokemonData = [
    data[0] || {
      id: null,
      name: null,
      image: logoPokedex,
      height: null,
      weight: null,
      baseExperience: null,
      ability: null,
    },
    data[1] || {
      id: null,
      name: null,
      image: logoPokedex,
      height: null,
      weight: null,
      baseExperience: null,
      ability: null,
    },
  ];

  const disabled =
    pokemonData[0].image === logoPokedex ||
    pokemonData[1].image === logoPokedex;

  return (
    <div className="relative flex flex-col items-center mt-10">
      <div className="flex w-4/5 flex-wrap items-center justify-center gap-y-10 gap-x-12 mb-10">
        <PokemonArenaCard
          id={pokemonData[0].id}
          name={pokemonData[0].name}
          image={pokemonData[0].image}
          height={pokemonData[0].height}
          weight={pokemonData[0].weight}
          baseExperience={pokemonData[0].baseExperience}
          ability={pokemonData[0].ability}
          onArenaChange={handleRefresh} // Obsługa odświeżenia
        />
        <FightSkullIcon onClick={handleClick} disabled={disabled} />
        <PokemonArenaCard
          id={pokemonData[1].id}
          name={pokemonData[1].name}
          image={pokemonData[1].image}
          height={pokemonData[1].height}
          weight={pokemonData[1].weight}
          baseExperience={pokemonData[1].baseExperience}
          ability={pokemonData[1].ability}
          onArenaChange={handleRefresh} // Obsługa odświeżenia
        />
      </div>
    </div>
  );
};

export default PokemonArenaList;
