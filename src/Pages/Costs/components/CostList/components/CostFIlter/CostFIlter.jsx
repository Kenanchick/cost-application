import cls from "./CostFIlter.module.css";
import { useCostsAndYears } from "../../../../../../context/MyCostsAndYearsContext";

export const CostFIlter = ({ year, yearChangeHandler }) => {
  const { selectYears } = useCostsAndYears();
  return (
    <div className={cls.costFilter}>
      <div className={cls.costFilterControl}>
        <label>Фильтровать по году</label>
        <select
          value={year}
          onChange={(e) => yearChangeHandler(e.target.value)}
        >
          <option value="all">Год</option>
          {selectYears.map((year) => {
            return (
              <option key={year} value={`${year.toString()}`}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
