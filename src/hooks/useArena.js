import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

const useArena = (name) => {
  const [isArena, setIsArena] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const checkIfAren = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/arena?name=${name}`
        );
        const data = await response.json();
        setIsArena(data.length > 0);
      } catch {
        enqueueSnackbar(
          "Uwaga! Mogą wystąpić problemy z aktualnością wyświetlanych danych. Pracujemy nad rozwiązaniem problemu.",
          {
            variant: "warrning",
          }
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
          enqueueSnackbar(`Usunięto ${name} z areny.`, { variant: "success" });
          return
        }
      } else {
        if (arenaData.length < 2) {
          await fetch("http://localhost:3000/arena", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          setIsArena(true);
          enqueueSnackbar(`Dodano ${name} do areny.`, { variant: "success" });
          return 
        } else {
          enqueueSnackbar(
            `W arenie mogą znajdować się maksymalnie 2 pokemony.`,
            {
              variant: "error",
            }
          );
          return 
        }
      }
    } catch (error) {
      enqueueSnackbar("Wystąpił problem. Spróbuj ponownie.", {
        variant: "error",
      });
      return 
    }
  };

  return { isArena, toggleArena };
};

export default useArena;
