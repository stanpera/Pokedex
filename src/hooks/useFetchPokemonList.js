import { useState, useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const useFetchPokemonList = (url) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Wystąpił błąd podczas pobierania danych.");
        }
        const result = await response.json();
        
        const afterFightResponse = await fetch(
          `http://localhost:3000/pokemonAfterFight`
        );
        const afterFightResult = await afterFightResponse.json();

        if (result.results) {
          const pokemonDetailsPromises = result.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            if (!res.ok)
              throw new Error("Błąd w pobieraniu szczegółów Pokémona");
            return await res.json();
          });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);

          const updatedPokemons = pokemonDetails.map((pokemon) => {
            const updatedPoke = afterFightResult.find(
              (afterFightPoke) => afterFightPoke.name === pokemon.name
            );
            return updatedPoke || pokemon;
          });
          {
            isLoggedIn ? setData(updatedPokemons) : setData(pokemonDetails);
          }
        } else if (!result.results && result.length > 0) {
          const updatedPokemons = result.map((pokemon) => {
            const updatedPoke = afterFightResult.find(
              (afterFightPoke) => afterFightPoke.name === pokemon.name
            );
            return updatedPoke || pokemon;
          });
          {
            isLoggedIn ? setData(updatedPokemons) : setData(result);
          }
        } else if (!Array.isArray(result) && result.name) {
          const updatedPoke = afterFightResult.find(
            (afterFightPoke) => afterFightPoke.name === result.name
          );
          {
            isLoggedIn ? setData(updatedPoke || result) : setData(result);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPokemonList;
