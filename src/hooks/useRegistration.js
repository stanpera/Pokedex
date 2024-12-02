import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useRegistration = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const checkResponse = await fetch(
        `http://localhost:3000/users?email=${encodeURIComponent(data.email)}`
      );
      const existingUsers = await checkResponse.json();

      if (existingUsers.length > 0) {
        enqueueSnackbar("Użytkownik o podanym adresie e-mail już istnieje!", {
          variant: "warning",
        });
        return false;
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

      enqueueSnackbar("Zostałeś pomyślnie zarejestrowany!", {
        variant: "success",
      });
      navigate("/loginForm");
      return true;
    } catch (error) {
      enqueueSnackbar(
        "Aktualnie nie ma możliwości rejestracji nowych użytkowników. Spróbuj ponownie później.",
        {
          variant: "error",
        }
      );
      return false;
    }
  };

  return {
    registerUser,
  };
};

export default useRegistration;




