import cls from "./CostFIlter.module.css";

export const CostFIlter = ({
  year,
  yearChangeHandler,
  selectYears,
  setSelectYears,
}) => {
  return (
    <div className={cls.costFilter}>
      <div className={cls.costFilterControl}>
        <label>Фильтровать по году</label>
        <select
          value={year}
          onChange={(e) => yearChangeHandler(e.target.value)}
        >
          <option value="all">Год</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
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
