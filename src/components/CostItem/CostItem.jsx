import { CostDate } from "../CostDate/CostDate";
import cls from "./CostItem.module.css";

export const CostItem = ({ cost }) => {
  return (
    <div className={cls.costItem}>
      <CostDate date={cost.date} />
      <div className={cls.costItemWrapper}>
        <h2 className={cls.title}>{cost.title}</h2>
        <p className={cls.price}>{+cost.price}$</p>
      </div>
    </div>
  );
};
