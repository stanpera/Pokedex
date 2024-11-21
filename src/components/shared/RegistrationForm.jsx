import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button"; // Zakładam, że masz komponent Button

// Schemat walidacji
const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Imię musi składać się z minimum 3 znaków" }),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Niepoprawny adres e-mail.",
    }),
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
  const [formData, setFormData] = useState(null);

  // Użycie React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Funkcja wysyłająca dane do serwera
  const onSubmit = async (data) => {
    try {
      // Wysyłanie danych do API
      const response = await fetch("http://localhost:3001/users", {
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

      const result = await response.json();
      console.log("Dane zapisane:", result);

      // Można ustawić stan w React, aby zobaczyć zapisane dane
      setFormData(result);
    } catch (error) {
      console.error("Błąd przy zapisywaniu danych:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-xl mb-4">Formularz rejestracyjny</h3>
      <form
        className="flex flex-col w-96 gap-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="text-center"
          {...register("name")}
          placeholder="Wpisz imię"
        />
        {errors.name?.message && (
          <p className="text-red-700 text-sm">{errors.name?.message}</p>
        )}
        <input
          className="text-center"
          {...register("email")}
          placeholder="Wpisz e-mail"
        />
        {errors.email?.message && (
          <p className="text-red-700 text-sm">{errors.email?.message}</p>
        )}
        <input
          className="text-center"
          {...register("password")}
          placeholder="Wpisz hasło"
        />
        {errors.password?.message && (
          <p className="text-red-700 text-sm">{errors.password?.message}</p>
        )}
        <input
          className="text-center"
          {...register("confirmPassword")}
          placeholder="Powtórz hasło"
        />
        {errors.confirmPassword?.message && (
          <p className="text-red-700 text-sm">
            {errors.confirmPassword?.message}
          </p>
        )}
        <Button type="submit" color="login" size="small">
          ZAREJESTRUJ SIĘ
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
