import { useState, useEffect } from "react";

const useFetch = (url) => {
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
            try {
              const res = await fetch(pokemon.url);
              if (!res.ok)
                throw new Error(
                  "Wystąpił błąd w pobieraniu szczegółów Pokémona"
                );
              return await res.json();
            } catch (err) {
              console.error(
                "Wystąpił błąd przy pobieraniu szczegółów dla",
                pokemon.name,
                err
              );
              return null;
            }
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

export default useFetch;
