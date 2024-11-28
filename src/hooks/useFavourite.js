import { useContext, useState, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useFavourite = (name) => {
  const { handleNotification } = useContext(NotificationContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/favouritePokemons?name=${name}`
        );
        const data = await response.json();
        setIsFavorite(data.length > 0);
      } catch {
        handleNotification(
          "Uwaga! Mogą wystąpić problemy z aktualnością wyświetlanych danych. Pracujemy nad rozwiązaniem problemu.",
          "secondary"
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
          handleNotification(
            `Usunięto ${name.charAt(0).toUpperCase()}${name.slice(
              1
            )} z ulubionych.`
          );
        }
      } else {
        await fetch("http://localhost:3000/favouritePokemons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        setIsFavorite(true);
        handleNotification(
          `Dodano ${name.charAt(0).toUpperCase()}${name.slice(
            1
          )} do ulubionych.`
        );
      }
    } catch (error) {
      handleNotification(
        "Aktualnie nie można dodawać pokemonów do ulubionych. Spróbuj ponownie później.",
        "secondary"
      );
    }
  };

  return { isFavorite, toggleFavourite };
};

export default useFavourite;
