import Button from "../Other/Button";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import Input from "../Other/Input";

const LoginForm = () => {
  const {
    handleSubmit,
    setName,
    setPassword,
    name,
    password,
    isLoggedIn,
    error,
  } = useContext(LoginContext);
  return (
    <>
      {!isLoggedIn && (
        <div className="flex flex-col items-center mt-32">
          <h3 className="text-2xl mb-4">Formularz logowania</h3>
          <form className="flex flex-col w-96 gap-y-2" onSubmit={handleSubmit}>
            <Input
              name="name"
              value={name}
              inputType="text"
              placeholder="Wpisz imię"
              onChange={(e) => setName(e.target.value)}
              error={error}
            />
            <Input
              name="password"
              value={password}
              inputType="password"
              placeholder="Wpisz hasło"
              onChange={(e) => setPassword(e.target.value)}
              error={error}
            />
            <Button color="login" type="submit" className="mr-3">
              ZALOGUJ SIĘ
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginForm;
