import { useState, useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const usePageNumber = ({ jsonUrl }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [totalAmountPages, setTotalAmountPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const apiPokemonsAmount = 150;

      try {
        if (
          isLoggedIn &&
          jsonUrl ===
            `http://localhost:3000/updatedPokemons?isCustomPokemon_gte=1`
        ) {
          const createdPokemonsResponse = await fetch(jsonUrl);
          if (!createdPokemonsResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const createdPokemons = await createdPokemonsResponse.json();

          const numberOfPages = Math.ceil(
            (createdPokemons.length + apiPokemonsAmount) / 15
          );
          setTotalAmountPages(numberOfPages);
        } else if (
          isLoggedIn &&
          jsonUrl === `http://localhost:3000/favouritePokemons`
        ) {
          const favouritePokemonsResponse = await fetch(jsonUrl);
          if (!favouritePokemonsResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const favouritePokemons = await favouritePokemonsResponse.json();

          const numberOfPages = Math.ceil(favouritePokemons.length / 15);
          setTotalAmountPages(numberOfPages);
        } else if (!isLoggedIn) {
          const numberOfPages = Math.ceil(apiPokemonsAmount / 15);
          setTotalAmountPages(numberOfPages);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { totalAmountPages, loading, error };
};

export default usePageNumber;
