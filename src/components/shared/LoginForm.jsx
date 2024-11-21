import Button from "./Button";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
const LoginForm = () => {
  const { handleSubmit, setName, setPassword, name, password, isLoggedIn } =
    useContext(LoginContext); 

  return (
    <>
      {!isLoggedIn && (
        <div className="flex flex-col items-center mt-10">
          <h3 className="text-xl mb-4">Formularz logowania</h3>
          <form className="flex flex-col w-96 gap-y-2" onSubmit={handleSubmit}>
            <input
              className="text-center"
              type="text"
              value={name}
              placeholder="Wpisz imię"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="text-center"
              type="password"
              value={password}
              placeholder="Wpisz hasło"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="login" size="small" type="submit">
              ZALOGUJ SIĘ
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
