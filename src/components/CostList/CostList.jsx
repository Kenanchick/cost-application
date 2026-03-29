import cls from "./CostList.module.css";
import { CostItem } from "../CostItem";
import { CostFIlter } from "../CostFIlter";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CostList = ({ costs, selectYears, setSelectYears }) => {
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
      <CostFIlter
        selectYears={selectYears}
        setSelectYears={setSelectYears}
        yearChangeHandler={yearChangeHandler}
        year={selectedYear}
      />
      {filteredCosts.map((cost) => {
        return (
          <Link key={cost.id} to={`/costs/${cost.id}`} className={cls.link}>
            <CostItem cost={cost} />
          </Link>
        );
      })}
    </div>
  );
};
