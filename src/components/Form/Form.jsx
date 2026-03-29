import { useState } from "react";
import cls from "./Form.module.css";
import { Input } from "../Input";
import { ErrorModal } from "../ErrorModal";

export const Form = ({ create, selectYears, setSelectYears }) => {
  const [dataInputs, setDataInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const [error, setError] = useState(null);

  const changeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addNewCost = (e) => {
    e.preventDefault();
    if (
      dataInputs.title.length === 0 ||
      dataInputs.price.length === 0 ||
      dataInputs.date.length === 0
    ) {
      setError("Заполните все поля");
      return;
    }

    const newCost = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: dataInputs.title,
      price: dataInputs.price,
      date: new Date(dataInputs.date),
    };

    setSelectYears((prev) => {
      if (!prev.includes(newCost.date.getFullYear())) {
        return [...prev, newCost.date.getFullYear()].sort((a, b) => b - a);
      }
      return prev;
    });

    create(newCost);
    setDataInputs({ title: "", price: "", date: "" });
  };

  return (
    <>
      <form onSubmit={(e) => addNewCost(e)}>
        {error && (
          <ErrorModal message={error} closeModal={() => setError(null)} />
        )}
        <div className={cls.inputsRow}>
          <div className={cls.inputBox}>
            <label htmlFor="title">Название</label>
            <Input
              id="title"
              value={dataInputs.title}
              name="title"
              onChange={changeData}
              type={"text"}
            />
          </div>
          <div className={cls.inputBox}>
            <label htmlFor="price">Cумма</label>
            <Input
              id="price"
              value={dataInputs.price}
              name="price"
              onChange={changeData}
              type="text"
            />
          </div>

          <div className={cls.inputBox}>
            <label htmlFor="date">Дата</label>
            <Input
              id="date"
              value={dataInputs.date}
              name="date"
              onChange={changeData}
              type="date"
            />
          </div>
        </div>

        <button className={cls.button} type="submit">
          Добавить Расход
        </button>
      </form>
    </>
  );
};
