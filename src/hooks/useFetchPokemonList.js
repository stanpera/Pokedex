import { useState, useEffect, useContext } from "react";
const useFetchPokemonList = (url) => {
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

        if (result.results) {
          const pokemonDetailsPromises = result.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            if (!res.ok)
              throw new Error("Błąd w pobieraniu szczegółów Pokémona");
            return await res.json();
          });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);
          setData(pokemonDetails.filter((details) => details !== null));
        } else {
          setData(result);
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



