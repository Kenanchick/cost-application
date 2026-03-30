import { useNavigate } from "react-router-dom";
import cls from "./LogInPage.module.css";
import { useState } from "react";
import { ErrorModal } from "../../components/ErrorModal";
import { Input } from "../../components/Input/Input";

export const LogInPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);

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
    navigate("/costs");
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
