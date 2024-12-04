import { useSnackbar } from "notistack";

const usePokemonUpdate = () => {
  const { enqueueSnackbar } = useSnackbar();

  const manageUpdate = async (data) => {
    if (!data || data.length === 0) {
      enqueueSnackbar("Brak danych do aktualizacji.", { variant: "warning" });
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/updatedPokemons`);
      const updatedPokemonsData = await response.json();
      const updatedPokemon = updatedPokemonsData.find(
        (p) => p.name === data.name
      );

      if (updatedPokemon) {
        const editedPokemon =
          updatedPokemon.weight !== data.weight ||
          updatedPokemon.height !== data.height ||
          updatedPokemon.baseExperience !== data.baseExperience;

        await fetch(
          `http://localhost:3000/updatedPokemons/${updatedPokemon.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (editedPokemon) {
          enqueueSnackbar(`Zmieniono atrybuty ${data.name.toUpperCase()}.`, {
            variant: "success",
          });
        } else {
          enqueueSnackbar(
            `Zaktualizowano statystyki walk ${data.name.toUpperCase()}.`,
            {
              variant: "success",
            }
          );
        }
      } else {
        await fetch("http://localhost:3000/updatedPokemons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        enqueueSnackbar(
          `Zaktualizowano statystyki walk ${data.name.toUpperCase()}.`,
          {
            variant: "success",
          }
        );
      }
    } catch (error) {
      enqueueSnackbar(
        "Wystąpił problem. Statystyki walk i atrybuty pokemonów mogą być nieaktualne.",
        { variant: "error" }
      );
    }
  };

  return { manageUpdate };
};

export default usePokemonUpdate;
