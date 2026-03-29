import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import cls from "./CostPage.module.css";
import { useParams } from "react-router-dom";

export const CostPage = ({ costs }) => {
  const { id } = useParams();

  const costItem = costs.find((cost) => cost.id === Number(id));
  console.log(costItem);
  return <div>{costItem ? <h1>{costItem.title}</h1> : <NotFoundPage />}</div>;
};
