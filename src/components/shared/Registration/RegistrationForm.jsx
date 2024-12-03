import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RegistrationInput from "./RegistrationInput";
import Button from "../Other/Button";
import useRegistration from "../../../hooks/useRegistration";

const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Imię musi składać się z minimum 3 znaków" }),
    email: z.string().email({ message: "Niepoprawny adres e-mail." }),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"<>?,./;'[\]\\|~`-]).{8,}$/,
        {
          message:
            "Hasło musi mieć co najmniej 8 znaków, 1 dużą literę, 1 cyfrę i 1 znak specjalny.",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Hasła muszą być identyczne.",
  });

const RegistrationForm = () => {
  const { registerUser } = useRegistration();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await registerUser(data);
  };

  return (
    <div className="flex flex-col items-center mt-32">
      <h3 className="text-2xl mb-4">Formularz rejestracyjny</h3>
      <form
        className="flex flex-col w-96 gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RegistrationInput
          register={register}
          name="name"
          placeholder="Wpisz imię"
          error={errors.name}
        />
        <RegistrationInput
          register={register}
          name="email"
          placeholder="Wpisz email"
          error={errors.email}
        />
        <RegistrationInput
          register={register}
          name="password"
          placeholder="Wpisz hasło"
          error={errors.password}
        />
        <RegistrationInput
          register={register}
          name="confirmPassword"
          placeholder="Powtórz hasło"
          error={errors.confirmPassword}
        />
        <Button type="submit" color="login" size="medium" className="mr-3">
          ZAREJESTRUJ SIĘ
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
