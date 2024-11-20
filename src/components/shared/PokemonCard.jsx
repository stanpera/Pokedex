const PokemonCard = ({
  name,
  image,
  height,
  weight,
  baseExperience,
  ability,
}) => {
  return (
    <div className="flex flex-col items-center bg-pokemon-card shadow-md shadow-pokemon-card-shadow py-10 rounded-lg w-96">
      <div className="flex justify-center">
        <img className="w-64" src={image} alt={name} />
      </div>
      <h3 className=" text-3xl text-center leading-none capitalize font-bangers">{name}</h3>
      <div className="mt-5 w-3/4 flex justify-between">
        <div>
          <p className="text-xl text-center mb-2 font-itim text-pokemon-card-details">
            {height}
            <span className=" text-main-text-color block">
              Height
            </span>
          </p>
          <p className="text-xl text-center font-itim text-pokemon-card-details">
            {weight}
            <span className="text-main-text-color block">
              Weight
            </span>
          </p>
        </div>
        <div>
          <p className="text-xl text-center mb-2 font-itim text-pokemon-card-details">
            {baseExperience}
            <span className="text-main-text-color block">
              Base Experience
            </span>
          </p>
          <p className="text-xl text-center font-itim text-pokemon-card-details">
            {ability}
            <span className="text-main-text-color block">
              Ability
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;





