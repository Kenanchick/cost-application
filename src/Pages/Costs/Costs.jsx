import cls from "./Costs.module.css";
import { useState } from "react";

import { CostList } from "./components/CostList";
import { Form } from "./components/Form";
import { useCostsAndYears } from "../../context/MyCostsAndYearsContext";

export const Costs = () => {
  const { costs, setCosts } = useCostsAndYears();
  const create = (cost) => {
    setCosts([...costs, cost]);
  };
  return (
    <div className={cls.homePage}>
      <Form create={create} />
      <CostList />
    </div>
  );
};
