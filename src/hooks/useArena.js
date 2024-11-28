import { useContext, useState, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useArena = (name) => {
  const { handleNotification } = useContext(NotificationContext);
  const [isArena, setIsArena] = useState(false);

  useEffect(() => {
    const checkIfAren = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/arena?name=${name}`
        );
        const data = await response.json();
        setIsArena(data.length > 0);
      } catch {
        handleNotification(
          "Uwaga! Mogą wystąpić problemy z aktualnością wyświetlanych danych. Pracujemy nad rozwiązaniem problemu.",
          "secondary"
        );
      }
    };

    checkIfAren();
  }, [name]);

  const toggleArena = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/arena`);
      const arenaData = await response.json();

      if (isArena) {
        const pokemonToRemove = arenaData.find((p) => p.name === name);
        if (pokemonToRemove) {
          await fetch(`http://localhost:3000/arena/${pokemonToRemove.id}`, {
            method: "DELETE",
          });
          setIsArena(false);
          handleNotification(
            `Usunięto ${name.charAt(0).toUpperCase()}${name.slice(1)} z areny.`
          );
        }
      } else {
        if (arenaData.length < 2) {
          await fetch("http://localhost:3000/arena", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          setIsArena(true);
          handleNotification(
            `Dodano ${name.charAt(0).toUpperCase()}${name.slice(1)} do areny.`
          );
        } else {
          handleNotification(
            `W arenie mogą znajdować się maksymalnie 2 pokemony.`,
            "secondary"
          );
        }
      }
    } catch (error) {
      handleNotification(
        "Aktualnie nie można dodawać pokemonów do areny. Spróbuj ponownie później.",
        "secondary"
      );
    }
  };

  return { isArena, toggleArena };
};

export default useArena;
