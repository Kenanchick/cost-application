import cls from "./RegistrationPage.module.css";
import { useState } from "react";
import { Input } from "../../components/Input";

export const RegistrationPage = () => {
  const [userData, setUserData] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const onChangeUserDataHandler = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(name, value);
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
        <label className={cls.label} htmlFor="login">
          Введите email
        </label>
        <Input
          className={cls.input}
          id="email"
          name="email"
          type="email"
          value={userData.email}
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
        <label className={cls.label} htmlFor="login">
          Подтвердите пароль
        </label>
        <Input
          className={cls.input}
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          value={userData.confirmPassword}
          onChange={(e) => onChangeUserDataHandler(e)}
        />

        <button className={cls.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
