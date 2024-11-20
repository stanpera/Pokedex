const PokemonSearching = ({ search, setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex justify-center bg-searching-pokemon py-4 shadow-md shadow-searching-pokemon-shadow rounded-md">
      <input
        className="rounded p-1 h-10 w-72 bg-searching-pokemon-input placeholder:text-white placeholder:text-xl text-center text-xl"
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Znajdź Pokemona..."
      />
    </div>
  );
};

export default PokemonSearching;

