import cls from "./RegistrationPage.module.css";
import { useInput } from "./hook/useInput";
import { Input } from "../../components/Input";
import classNames from "classnames";
import { isFormValid } from "../../helpers/isFormValid";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const RegistrationPage = () => {
  const login = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const [nav, setNav] = useState(null);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (isFormValid(login, email, password, confirmPassword)) {
      setNav(true);
    }
  };

  if (nav) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={cls.container}>
      <form className={cls.form} onSubmit={(e) => submitFormHandler(e)}>
        <label className={cls.label} htmlFor="login">
          Введите логин
        </label>
        {login.error && <div style={{ color: "red" }}>{login.error}</div>}
        <Input
          onChange={(e) => login.onChange(e)}
          className={classNames(cls.input, login.error && cls.error)}
          id="login"
          name="login"
          type="text"
          value={login.value}
        />
        <label className={cls.label} htmlFor="login">
          Введите email
        </label>
        {email.error && <div style={{ color: "red" }}>{email.error}</div>}
        <Input
          onChange={(e) => email.onChange(e)}
          className={classNames(cls.input, email.error && cls.error)}
          id="email"
          name="email"
          type="text"
          value={email.value}
        />
        <label className={cls.label} htmlFor="password">
          Введите пароль
        </label>
        {password.error && <div style={{ color: "red" }}>{password.error}</div>}
        <Input
          onChange={(e) => password.onChange(e)}
          className={classNames(cls.input, password.error && cls.error)}
          id="password"
          name="password"
          type="password"
          value={password.value}
        />
        <label className={cls.label} htmlFor="login">
          Подтвердите пароль
        </label>
        {confirmPassword.error && (
          <div style={{ color: "red" }}>{confirmPassword.error}</div>
        )}
        <Input
          onChange={(e) => confirmPassword.onChange(e)}
          className={classNames(cls.input, confirmPassword.error && cls.error)}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword.value}
        />

        <button className={cls.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
