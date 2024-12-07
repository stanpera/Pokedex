import useFetchPokemonList from "../../../hooks/useFetchPokemonList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RegistrationInput from "../Registration/RegistrationInput";
import Button from "../Other/Button";
import usePokemonUpdate from "../../../hooks/usePokemonUpdate";
import clsx from "clsx";
import ArrowLeft from "../Other/ArrowLeft";
import ArrowRight from "../Other/ArrowRight";
import { useEffect, useState } from "react";
import Loading from "../Other/Loading";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Imię musi zawierać przynajmniej 3 znaki" }),
  weight: z.string().min(1, { message: "Wartość musi wynosić przynajmniej 1" }),
  height: z.string().min(1, { message: "Wartość musi wynosić przynajmniej 1" }),
  baseExperience: z.string().min(1, { message: "Wartość nie może być ujemna" }),
  ability: z
    .string()
    .min(3, { message: "Umiejętność musi zawierać przynajmniej 3 znaki" }),
});
const CreatePokemonForm = () => {
  const [offset, setOffset] = useState(150);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { data, loading, error } = useFetchPokemonList(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=2`
  );

  const { manageUpdate } = usePokemonUpdate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setIsLeftDisabled(offset === 150);
    setIsRightDisabled(data?.length < 2);
  }, [offset, data]);

  const handleImageIncrease = () => {
    if (!isRightDisabled) {
      setOffset((prev) => prev + 1);
    }
  };

  const handleImageDecrease = () => {
    if (!isLeftDisabled) {
      setOffset((prev) => prev - 1);
    }
  };

  const onSubmit = async (formData) => {
    if (data[0].isCustomPokemon) {
      enqueueSnackbar(
        "Pokemon o wskazany obrazie już istnieje. Zmień obraz dla pokemona!",
        { variant: "error" }
      );
    } else {
      const newData = {
        id: formData.name,
        name: formData.name,
        image: data[0].sprites?.other["official-artwork"].front_default,
        height: Number(formData.height),
        weight: Number(formData.weight),
        baseExperience: Number(formData.baseExperience),
        ability: formData.ability,
        win: null,
        lost: null,
        isCustomPokemon: Number(1),
      };
      await manageUpdate(newData);
      navigate("/");
    }
  };

  if (error)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {error}
      </p>
    );

  return (
    <main className="flex flex-col items-center mt-10 mb-10 mx-5">
      <h3 className={clsx("text-2xl lg:text-3xl mb-4 font-bangers")}>
        Formularz tworzenia pokemona
      </h3>
      <div className="flex flex-col w-3/4 md:w-96">
        <div className="flex justify-between w-full ">
          <ArrowLeft onClick={handleImageDecrease} disabled={isLeftDisabled} />
          {loading ? (
            <div className={clsx("flex items-center h-40 lg:h-64")}>
              <Loading edit={true} />
            </div>
          ) : (
            <div className={clsx("flex items-center h-40 lg:h-64")}>
              <p>{error}</p>
            </div>
          )}
          {!loading && (
            <img
              className={clsx(
                "h-40 lg:h-64",
                data[0]?.isCustomPokemon && "opacity-30"
              )}
              src={
                data[0]?.sprites?.other["official-artwork"].front_default ||
                data[0]?.image
              }
              alt={data[0]?.name}
            />
          )}
          <ArrowRight
            onClick={handleImageIncrease}
            disabled={isRightDisabled}
          />
        </div>
        <form
          className="flex flex-col mt-3 font-itim text-base lg:text-lg xl:text-xl gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <RegistrationInput
            register={register}
            name="name"
            inputType="text"
            placeholder="Wprowadź imię"
            error={errors.name}
          />
          <RegistrationInput
            register={register}
            name="weight"
            inputType="number"
            placeholder="Wprowadź wagę"
            error={errors.weight}
          />
          <RegistrationInput
            register={register}
            name="height"
            inputType="number"
            placeholder="Wprowadź wzrost"
            error={errors.height}
          />
          <RegistrationInput
            register={register}
            name="baseExperience"
            inputType="number"
            placeholder="Wprowadź punkty doświadczenia"
            error={errors.baseExperience}
          />
          <RegistrationInput
            register={register}
            name="ability"
            inputType="text"
            placeholder="Wprowadź umiejętność"
            error={errors.ability}
          />
          <Button
            type="submit"
            color="login"
            size="medium"
            className="mr-3 mt-5 font-roboto"
          >
            STWÓRZ
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CreatePokemonForm;
