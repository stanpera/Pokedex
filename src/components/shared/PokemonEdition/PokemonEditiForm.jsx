import { useParams } from "react-router-dom";
import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RegistrationInput from "../Registration/RegistrationInput";
import Button from "../Other/Button";
import usePokemonUpdate from "../../../hooks/usePokemonUpdate";
import clsx from "clsx";

const schema = z.object({
  height: z.string().min(1, { message: "Wartość musi wynosić przynajmniej 1" }),
  weight: z.string().min(1, { message: "Wartość musi wynosić przynajmniej 1" }),
  baseExperience: z.string().min(1, { message: "Wartość nie może być ujemna" }),
});

const PokemonEditForm = () => {
  const { name } = useParams();
  // const [updatedData, setupdatedData] = useState({ id: "dupa", name: "dupa" });
  const { data, loading, error } = useFetchPokemonList(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const { manageUpdate } = usePokemonUpdate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    const newData = {
      id: data.name,
      name: data.name,
      image:
        data.image || data.sprites?.other["official-artwork"].front_default,
      height: Number(formData.height) || data.height,
      weight: Number(formData.weight) || data.height,
      baseExperience:
        Number(formData.baseExperience) ||
        data.baseExperience ||
        data.base_experience,
      ability: data.ability || data.abilities?.[0]?.ability?.name,
      win: data.win >= 0 ? data.win : null,
      lost: data.lost >= 0 ? data.lost : null,
    };
    await manageUpdate(newData);
  };

  if (loading)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Trwa pobieranie danych...
      </p>
    );
  if (error)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {error}
      </p>
    );

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h3 className={clsx("text-2xl lg:text-3xl mb-4 font-bangers")}>
        Formularz edycji pokemona {data?.name}
      </h3>
      <div>
        <img
          className={clsx("w-40 lg:w-64")}
          src={
            data.sprites?.other["official-artwork"].front_default || data?.image
          }
          alt={data?.name}
        />
      </div>
      <form
        className="flex flex-col w-3/4 md:w-96 mt-3 font-itim text-base lg:text-lg xl:text-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center mb-3">
          <label htmlFor="height" className="text-center">
            Wzrost przed edycją: {data?.height}
          </label>
          <RegistrationInput
            register={register}
            name="height"
            inputType="number"
            placeholder="Wprowadź nowy wzrost"
            error={errors.height}
          />
        </div>
        <div className="text-center mb-3">
          <label htmlFor="weight" className="text-center">
            Waga przed edycją: {data?.weight}
          </label>
          <RegistrationInput
            register={register}
            name="weight"
            inputType="number"
            placeholder="Wprowadź nową wagę"
            error={errors.weight}
          />
        </div>
        <div className="text-center mb-10">
          <label htmlFor="baseExperience" className="text-center">
            Doświadczenie przed edycją:{" "}
            {data?.base_experience || data?.baseExperience}
          </label>
          <RegistrationInput
            register={register}
            name="baseExperience"
            inputType="number"
            placeholder="Wprowadź nowe doświadczenie"
            error={errors.baseExperience}
          />
        </div>
        <Button
          type="submit"
          color="login"
          size="medium"
          className="mr-3 font-roboto"
        >
          ZMIEŃ ATRYBUTY
        </Button>
      </form>
    </div>
  );
};

export default PokemonEditForm;




