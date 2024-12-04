import { useState, useEffect } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonArenaCard from "./PokemonArenaCard";
import Notification from "../Other/Notification";
import Loading from "../Other/Loading";
import logoPokedex from "../../../icons/logoPokedex.png";
import FightSkullIcon from "../../../icons/FightSkullIcon";
import ExitArenaIcon from "../../../icons/ExitArenaIcon";
import { useNavigate } from "react-router-dom";
import PokemonArenaResults from "./PokemonArenaResults";
import usePokemonUpdate from "../../../hooks/usePokemonUpdate";
import useArena from "../../../hooks/useArena";

const PokemonArenaList = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [whoWon, setWhoWon] = useState("initial");
  const [whoLose, setWhoLose] = useState("initial");
  const { manageUpdate } = usePokemonUpdate();

  const { data, loading, error } = useFetchPokemonList(
    `http://localhost:3000/arena?refreshKey=${refreshKey}`
  );

  const { deleteAllFromArena } = useArena();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState([
    {
      id: null,
      name: null,
      image: logoPokedex,
      height: null,
      weight: null,
      baseExperience: null,
      ability: null,
      win: null,
      lost: null,
    },
    {
      id: null,
      name: null,
      image: logoPokedex,
      height: null,
      weight: null,
      baseExperience: null,
      ability: null,
      win: null,
      lost: null,
    },
  ]);

  useEffect(
    () => {
      if (data) {
        setPokemonData([
          data[0] || {
            id: null,
            name: null,
            image: logoPokedex,
            height: null,
            weight: null,
            baseExperience: null,
            ability: null,
            win: null,
            lost: null,
          },
          data[1] || {
            id: null,
            name: null,
            image: logoPokedex,
            height: null,
            weight: null,
            baseExperience: null,
            ability: null,
            win: null,
            lost: null,
          },
        ]);
      }
    },
    [data],
    [refreshKey]
  );

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleBaseExperienceUpdate = (pokemon1, pokemon2) => {
    if (
      pokemon1.baseExperience * pokemon1.weight >
      pokemon2.baseExperience * pokemon2.weight
    ) {
      return [
        {
          ...pokemon1,
          baseExperience: pokemon1.baseExperience + 10,
          win: pokemon1.win + 1,
        },
        {
          ...pokemon2,
          lost: pokemon2.lost + 1,
        },
      ];
    } else if (
      pokemon1.baseExperience * pokemon1.weight <
      pokemon2.baseExperience * pokemon2.weight
    ) {
      return [
        {
          ...pokemon1,
          lost: pokemon1.lost + 1,
        },
        {
          ...pokemon2,
          baseExperience: pokemon2.baseExperience + 10,
          win: pokemon2.win + 1,
        },
      ];
    }
    return [pokemon1, pokemon2]; // Brak zmian w przypadku remisu
  };

  const handleFight = () => {
    if (!disabled) {
      setPokemonData((prevPokemonData) =>
        handleBaseExperienceUpdate(prevPokemonData[0], prevPokemonData[1])
      );
    }
    if (
      pokemonData[0].baseExperience * pokemonData[0].weight >
      pokemonData[1].baseExperience * pokemonData[1].weight
    ) {
      setWhoWon("first");
      setWhoLose("second");
    } else if (
      pokemonData[0].baseExperience * pokemonData[0].weight <
      pokemonData[1].baseExperience * pokemonData[1].weight
    ) {
      setWhoWon("second");
      setWhoLose("first");
    } else {
      setWhoWon("draw");
    }
  };

  const handleExit = () => {
    manageUpdate(pokemonData[0]);
    manageUpdate(pokemonData[1]);
    setWhoWon("initial");
    setWhoLose("initial");
    deleteAllFromArena([pokemonData[0].id]);
    deleteAllFromArena(pokemonData[1].id);
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Notification variant="secondary" message={error} />;
  }

  const disabled =
    pokemonData[0].image === logoPokedex ||
    pokemonData[1].image === logoPokedex;

  return (
    <div className="relative flex flex-col items-center mt-10">
      <div className="flex flex-col sm:flex-row w-4/5 items-center justify-center mb-10">
        <PokemonArenaCard
          id={pokemonData[0].id}
          name={pokemonData[0].name}
          image={pokemonData[0].image}
          height={pokemonData[0].height}
          weight={pokemonData[0].weight}
          baseExperience={pokemonData[0].baseExperience}
          ability={pokemonData[0].ability}
          win={pokemonData[0].win}
          lost={pokemonData[0].lost}
          onArenaChange={handleRefresh}
          isWinner={whoWon === "first"}
          isLoser={whoLose === "first"}
        />
        {whoWon === "initial" ? (
          <FightSkullIcon onClick={handleFight} disabled={disabled} />
        ) : (
          <ExitArenaIcon onClick={handleExit} />
        )}
        <PokemonArenaCard
          id={pokemonData[1].id}
          name={pokemonData[1].name}
          image={pokemonData[1].image}
          height={pokemonData[1].height}
          weight={pokemonData[1].weight}
          baseExperience={pokemonData[1].baseExperience}
          ability={pokemonData[1].ability}
          win={pokemonData[1].win}
          lost={pokemonData[1].lost}
          onArenaChange={handleRefresh}
          isWinner={whoWon === "second"}
          isLoser={whoLose === "second"}
        />
      </div>
      {whoWon && (
        <PokemonArenaResults
          firstPokemon={pokemonData[0].name}
          firstPokemonXp={[pokemonData[0].baseExperience]}
          secondPokemon={pokemonData[1].name}
          SecondPokemonXp={[pokemonData[1].baseExperience]}
          whoWon={whoWon}
        />
      )}
    </div>
  );
};

export default PokemonArenaList;
