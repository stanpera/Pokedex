const PokemonSearching = ({ search, setSearch }) => {
  
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div
      className={
        "flex justify-center py-2 shadow-md rounded-md bg-searching-pokemon shadow-searching-pokemon-shadow dark:bg-dark-red dark:shadow-dark-red-shadow"
      }
    >
      <input
        className={
          "rounded p-1 h-10 w-72 placeholder:text-lg text-center text-base lg:text-lg xl:text-xl bg-searching-pokemon-input placeholder:text-white dark:bg-dark-searching-pokemon-input dark:text-dark-main-text-color dark:placeholder:text-dark-second-text-color"
        }
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Znajdź Pokemona..."
      />
    </div>
  );
};

export default PokemonSearching;
