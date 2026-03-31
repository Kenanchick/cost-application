import cls from "./CostList.module.css";
import { CostItem } from "./components/CostItem";
import { CostFIlter } from "./components/CostFIlter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCostsAndYears } from "../../../../context/MyCostsAndYearsContext";

export const CostList = () => {
  const { costs } = useCostsAndYears();

  const [selectedYear, setSelectedYear] = useState("all");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts =
    selectedYear === "all"
      ? costs
      : costs.filter(
          (cost) => cost.date.getFullYear().toString() === selectedYear,
        );

  return (
    <div className={cls.costs}>
      <CostFIlter yearChangeHandler={yearChangeHandler} year={selectedYear} />
      {filteredCosts.map((cost) => {
        return (
          <Link key={cost.id} to={`/app/costs/${cost.id}`} className={cls.link}>
            <CostItem cost={cost} />
          </Link>
        );
      })}
    </div>
  );
};
