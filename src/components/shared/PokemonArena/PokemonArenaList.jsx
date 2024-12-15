import { useState, useEffect } from "react";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import PokemonArenaCard from "./PokemonArenaCard";
import Notification from "../Other/Notification";
import Loading from "../Other/Loading";
import logoPokedex from "../../../icons/logoPokedex.png";
import FightSkullIcon from "./FightSkullIcon";
import ExitArenaIcon from "./ExitArenaIcon";
import { useNavigate } from "react-router-dom";
import PokemonArenaResults from "./PokemonArenaResults";
import usePokemonUpdate from "../../../hooks/usePokemonUpdate";
import useArena from "../../../hooks/useArena";
import { useCallback } from "react";

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

  const handleRefresh = useCallback(() => {
    setRefreshKey((prevKey) => prevKey + 1);
  }, []);

  const handleBaseExperienceUpdate = useCallback((pokemon1, pokemon2) => {
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
    return [pokemon1, pokemon2];
  }, []);

  const handleFight = useCallback(() => {
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
  }, [pokemonData]);

  const handleExit = useCallback(() => {
    manageUpdate(pokemonData[0]);
    manageUpdate(pokemonData[1]);
    setWhoWon("initial");
    setWhoLose("initial");
    deleteAllFromArena([pokemonData[0].id]);
    deleteAllFromArena(pokemonData[1].id);
    navigate("/");
  }, [pokemonData, deleteAllFromArena]);

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
      <div className="flex flex-col sm:flex-row w-10/12 lg:w-3/4  items-center justify-center mb-10">
        <PokemonArenaCard
          pokemon={pokemonData[0]}
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
          pokemon={pokemonData[1]}
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
