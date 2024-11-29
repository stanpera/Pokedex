import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RegistrationInput from "./RegistrationInput";
import Button from "../Button";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

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
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const checkResponse = await fetch(
        `http://localhost:3000/users?email=${encodeURIComponent(data.email)}`
      );
      const existingUsers = await checkResponse.json();
      if (existingUsers.length > 0) {
        enqueueSnackbar("Użytkownik o podanym adresie e-mail już istnieje!", {
          variant: "warning",
        });
        return;
      }
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });
      console.log(existingUsers);
      enqueueSnackbar("Zostałeś pomyślnie zarejestrowany!", {
        variant: "success",
      });
      navigate("/loginForm");
    } catch (error) {
      enqueueSnackbar(
        "Aktualnie nie ma możliwości rejestracji nowych użytkowników. Spróbuj ponownie później.",
        {
          variant: "error",
        }
      );
    }
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
