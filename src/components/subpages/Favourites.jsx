import PokemonList from "../shared/PokemonList/PokemonList";

const Favourites = () => {
  const urlFavourite = "http://localhost:3000/favouritePokemons";
  return (
    <main className="pb-3 pt-5 w-full">
      <PokemonList url={urlFavourite} />
    </main>
  );
};

export default Favourites;
