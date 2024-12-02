const PokemonArenaResults = ({ firstPokemon, secondPokemon, whoWon }) => {
  return (
    <div>
      {whoWon === "first" && (
        <p className="text-3xl font-roboto font-bold text-exit-arena">
          WYGRYWA: {firstPokemon.toUpperCase()} !!!
        </p>
      )}
      {whoWon === "second" && (
        <p className="text-3xl font-roboto font-bold text-exit-arena">
          WYGRYWA: {secondPokemon.toUpperCase()}!
        </p>
      )}
      {whoWon === "draw" && (
        <p className="text-3xl font-roboto font-bold text-exit-arena">REMIS !!!</p>
      )}
    </div>
  );
};

export default PokemonArenaResults;


