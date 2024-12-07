import { useState, useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const mapUpdatedPokemons = (originalList, updatedList) => {
  return originalList.map((pokemon) => {
    const updatedPoke = updatedList.find(
      (updatedPoke) =>
        updatedPoke.name.toLowerCase() === pokemon.name.toLowerCase() ||
        updatedPoke.image ===
          pokemon.sprites?.other["official-artwork"].front_default
    );
    return updatedPoke || pokemon;
  });
};

const useFetchPokemonList = (url) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Wystąpił błąd podczas pobierania danych.");
        }
        const result = await response.json();

        const updatedResponse = await fetch(
          `http://localhost:3000/updatedPokemons`
        );
        const updatedResult = await updatedResponse.json();

        if (result.results) {
          const pokemonDetailsPromises = result.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            if (!res.ok)
              throw new Error("Błąd w pobieraniu szczegółów Pokémona");
            return await res.json();
          });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);

          const newUpdatedPokemons = mapUpdatedPokemons(
            pokemonDetails,
            updatedResult
          );

          {
            isLoggedIn ? setData(newUpdatedPokemons) : setData(pokemonDetails);
          }
        } else if (!result.results && result.length > 0) {
          const newUpdatedPokemons = mapUpdatedPokemons(result, updatedResult);
          isLoggedIn ? setData(newUpdatedPokemons) : setData(result);
        } else if (!Array.isArray(result) && result.name) {
          const newUpdatedPoke = updatedResult.find(
            (updatedPoke) =>
              updatedPoke.name.toLowerCase() === result.name.toLowerCase()
          );
          {
            isLoggedIn ? setData(newUpdatedPoke || result) : setData(result);
          }
        } else if (result.length === 0) {
          setData(result);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPokemonList;
