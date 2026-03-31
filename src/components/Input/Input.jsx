import cls from "./Input.module.css";
import classNames from "classnames";

export const Input = ({ id, value, name, onChange, type, className }) => {
  return (
    <input
      id={id}
      className={classNames(cls.input, className)}
      value={value}
      name={name}
      onChange={(e) => onChange(e)}
      type={type}
    />
  );
};
