import { useState, useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const usePageNumber = ({ jsonUrl, apiUrl }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [totalAmountPages, setTotalAmountPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (apiUrl && isLoggedIn) {
          const apiResponse = await fetch(apiUrl);
          if (!apiResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const apiResult = await apiResponse.json();

          const createdPokemonsResponse = await fetch(jsonUrl);
          if (!createdPokemonsResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const createdPokemons = await createdPokemonsResponse.json();

          const pokemonsAmount = [...apiResult.results, ...createdPokemons];
          const numberOfPages = Math.ceil(pokemonsAmount.length / 15);
          setTotalAmountPages(numberOfPages);
        } else if (apiUrl && !isLoggedIn) {
          const apiResponse = await fetch(apiUrl);
          if (!apiResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const apiResult = await apiResponse.json();

          const numberOfPages = Math.ceil(apiResult.results.length / 15);
          setTotalAmountPages(numberOfPages);
        } else {
          const favouritePokemonsResponse = await fetch(jsonUrl);
          if (!favouritePokemonsResponse.ok) {
            throw new Error("Wystąpił błąd podczas pobierania danych.");
          }
          const favouritePokemons = await favouritePokemonsResponse.json();

          const numberOfPages = Math.ceil(favouritePokemons.length / 15);
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
