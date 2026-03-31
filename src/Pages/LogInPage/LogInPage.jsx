import { useNavigate, useLocation } from "react-router-dom";
import cls from "./LogInPage.module.css";
import { useState } from "react";
import { ErrorModal } from "../../components/ErrorModal";
import { Input } from "../../components/Input/Input";
import { useAuth } from "../../hoc/AuthProvider";

export const LogInPage = () => {
  const [userData, setUserData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/app";

  const onChangeUserDataHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!userData.login.trim().length || !userData.password.trim().length) {
      setError("Заполните все поля");
      return;
    }
    const form = e.target;
    const user = form.login.value;
    const password = form.password.value;
    const newUser = {
      user: user,
      password: password,
    };
    signIn(newUser, () => {
      navigate(fromPage);
    });
  };

  return (
    <div className={cls.container}>
      {error && (
        <ErrorModal message={error} closeModal={() => setError(null)} />
      )}
      <form className={cls.form} onSubmit={(e) => validateForm(e)}>
        <label className={cls.label} htmlFor="login">
          Введите логин
        </label>
        <Input
          className={cls.input}
          id="login"
          name="login"
          type="text"
          value={userData.login}
          onChange={(e) => onChangeUserDataHandler(e)}
        />
        <label className={cls.label} htmlFor="password">
          Введите пароль
        </label>
        <Input
          className={cls.input}
          id="password"
          name="password"
          type="text"
          value={userData.password}
          onChange={(e) => onChangeUserDataHandler(e)}
        />

        <button className={cls.button} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
