import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

const useFavourite = (name) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/favouritePokemons?name=${name}`
        );
        const data = await response.json();
        setIsFavorite(data.length > 0);
      } catch {
        enqueueSnackbar(
          "Uwaga! Mogą wystąpić problemy z aktualnością wyświetlanych danych. Pracujemy nad rozwiązaniem problemu.",
          {
            variant: "warrning",
          }
        );
      }
    };

    checkIfFavorite();
  }, [name]);

  const toggleFavourite = async (data) => {
    try {
      if (isFavorite) {
        const response = await fetch(
          `http://localhost:3000/favouritePokemons?name=${name}`
        );
        const existingPokemon = await response.json();
        if (existingPokemon.length > 0) {
          const pokemonId = existingPokemon[0].id;
          await fetch(`http://localhost:3000/favouritePokemons/${pokemonId}`, {
            method: "DELETE",
          });
          setIsFavorite(false);
          enqueueSnackbar(
            `Usunięto ${name.charAt(0).toUpperCase()}${name.slice(
              1
            )} z ulubionych.`,
            {
              variant: "success",
            }
          );
        }
      } else {
        await fetch("http://localhost:3000/favouritePokemons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        setIsFavorite(true);
        enqueueSnackbar(
          `Dodano ${name.charAt(0).toUpperCase()}${name.slice(
            1
          )} do ulubionych.`,
          {
            variant: "success",
          }
        );
      }
    } catch (error) {
      enqueueSnackbar(
        "Aktualnie nie można dodawać pokemonów do ulubionych. Spróbuj ponownie później.",
        {
          variant: "error",
        }
      );
    }
  };

  return { isFavorite, toggleFavourite };
};

export default useFavourite;


