import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useCallback } from "react";

const useArena = (name) => {
  const [isArena, setIsArena] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (name) {
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
    }
  }, [name]);

  const toggleArena = useCallback(
    async (data) => {
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
            enqueueSnackbar(`Usunięto ${name} z areny.`, {
              variant: "success",
            });
            return;
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
            return;
          } else {
            enqueueSnackbar(
              `W arenie mogą znajdować się maksymalnie 2 pokemony.`,
              {
                variant: "error",
              }
            );
            return;
          }
        }
      } catch (error) {
        enqueueSnackbar("Wystąpił problem. Spróbuj ponownie.", {
          variant: "error",
        });
        return;
      }
    },
    [isArena, name, enqueueSnackbar]
  );

  const deleteAllFromArena = useCallback(
    async (pokemonId) => {
      try {
        const response = await fetch(
          `http://localhost:3000/arena/${pokemonId}`,
          {
            method: "DELETE",
          }
        );
        setIsArena(false);
        enqueueSnackbar("Arena została wyczyszczona.", {
          variant: "success",
        });
      } catch (error) {
        enqueueSnackbar(
          "Problem z oczyszczeniem areny. Spróbuj ponownie później.",
          {
            variant: "error",
          }
        );
      }
    },
    [enqueueSnackbar]
  );

  return { isArena, toggleArena, deleteAllFromArena };
};

export default useArena;
