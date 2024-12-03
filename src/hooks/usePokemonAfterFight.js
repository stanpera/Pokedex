import { useSnackbar } from "notistack";

const usePokemonAfterFight = () => {
  const { enqueueSnackbar } = useSnackbar();

  const manageAfterFight = async (data) => {
    if (!data || data.length === 0) {
      enqueueSnackbar("Brak danych do aktualizacji.", { variant: "warning" });
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/pokemonAfterFight`);
      const pokemonAfterFightData = await response.json();
      const pokemonAfterFight = pokemonAfterFightData.find(
        (p) => p.name === data.name
      );

      if (pokemonAfterFight) {
        await fetch(
          `http://localhost:3000/pokemonAfterFight/${pokemonAfterFight.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        enqueueSnackbar(`Zaktualizowano statystyki ${data.name}.`, {
          variant: "success",
        });
      } else {
        await fetch("http://localhost:3000/pokemonAfterFight", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        enqueueSnackbar(`Zaktualizowano statystyki ${data.name}.`, {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar(
        "Wystąpił problem. Statystyki pokemonów mogą być nieaktualne.",
        { variant: "error" }
      );
    }
  };

  return { manageAfterFight };
};

export default usePokemonAfterFight;
