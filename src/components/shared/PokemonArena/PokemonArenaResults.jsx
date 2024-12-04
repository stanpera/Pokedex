const PokemonArenaResults = ({
  firstPokemon,
  secondPokemon,
  whoWon,
  firstPokemonXp,
  secondPokemonXp,
}) => {
  return (
    <div className="text-center font-itim text-exit-arena">
      {whoWon === "first" && (
        <>
          <p className="text-3xl">
            WYGRYWA: {firstPokemon.toUpperCase()}
          </p>
          <p className="text-2xl">
            DOŚWIADCZENIE: {firstPokemonXp} + 10 XP
          </p>
        </>
      )}
      {whoWon === "second" && (
        <>
          <p className="text-3xl">
            WYGRYWA: {secondPokemon.toUpperCase()}
          </p>
          <p className="text-2xl">
            DOŚWIADCZENIE: {secondPokemonXp} + 10 XP
          </p>
        </>
      )}
      {whoWon === "draw" && (
        <p className="text-3xl">
          REMIS !!!
        </p>
      )}
    </div>
  );
};

export default PokemonArenaResults;
