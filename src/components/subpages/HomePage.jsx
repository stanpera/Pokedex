import PokemonList from "../shared/PokemonList/PokemonList";

const HomePage = () => {
  const urlApi = "https://pokeapi.co/api/v2/pokemon";
  return (
    <>
      <main className="pb-3 pt-5 w-full">
        <PokemonList  url={urlApi}/>
      </main>
    </>
  );
};

export default HomePage;


