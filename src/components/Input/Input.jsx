import cls from "./Input.module.css";

export const Input = ({ id, value, name, onChange, type }) => {
  return (
    <input
      id={id}
      className={cls.input}
      value={value}
      name={name}
      onChange={(e) => onChange(e)}
      type={type}
    />
  );
};
