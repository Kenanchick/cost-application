import {
  EMAIL_REGEX,
  PASS_LENGTH,
  PASS_UPPER,
  PASS_DIGIT,
  PASS_LETTER,
  LOGIN_LENGTH,
} from "../constans/regex";

export const isFormValid = (login, email, password, confirmPassword) => {
  let isValid = true;

  if (!LOGIN_LENGTH.test(login.value)) {
    login.setError("Логин должен состоять минимум из 4 символов");
    isValid = false;
  }

  if (!EMAIL_REGEX.test(email.value)) {
    email.setError("Некорректный email");
    isValid = false;
  }

  if (!PASS_LENGTH.test(password.value)) {
    password.setError("Пароль должен иметть минимум 4 символа");
    isValid = false;
  } else if (!PASS_UPPER.test(password.value)) {
    password.setError("Пароль должен иметь минимум одну заглавную букву");
    isValid = false;
  } else if (!PASS_DIGIT.test(password.value)) {
    password.setError("Пароль должен иметь минимум одну цифру");
    isValid = false;
  } else if (!PASS_LETTER.test(password.value)) {
    password.setError("Пароль должен иметь минимум одну букву");
    isValid = false;
  }

  if (
    password.value !== confirmPassword.value ||
    !confirmPassword.value.length
  ) {
    confirmPassword.setError("Пароли не совпадают");
    isValid = false;
  }

  if (login.value === "admin") {
    setTimeout(() => {
      login.setError("Логин занят");
    }, 1000);
    isValid = false;
  }

  if (isValid) {
    login.reset();
    email.reset();
    password.reset();
    confirmPassword.reset();
  }

  return isValid;
};
