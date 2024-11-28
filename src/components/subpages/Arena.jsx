import PokemonList from "../shared/PokemonList/PokemonList";

const Arena = () => {
  const urlArena = "http://localhost:3000/arena";
  return (
    <main className="pb-3 pt-5 w-full">
      <PokemonList url={urlArena} />
    </main>
  );
};

export default Arena;


