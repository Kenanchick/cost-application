import cls from "./CostDate.module.css";

export const CostDate = ({ date }) => {
  const month = date.toLocaleString("ru-RU", {
    month: "long",
  });
  const year = date.toLocaleString("ru-RU", {
    year: "numeric",
  });
  const day = date.toLocaleString("ru-RU", {
    day: "numeric",
  });
  return (
    <div className={cls.date}>
      <p>{day}</p>
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
};
