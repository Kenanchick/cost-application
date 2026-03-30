import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useNavigate } from "react-router-dom";
import { useCostsAndYears } from "../../context/MyCostsAndYearsContext";
import cls from "./CostPage.module.css";
import { useParams } from "react-router-dom";

export const CostPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { costs } = useCostsAndYears();
  const { id } = useParams();

  const costItem = costs.find((cost) => cost.id === Number(id));
  console.log(costItem);
  return (
    <div>
      {costItem ? <h1>{costItem.title}</h1> : <NotFoundPage />}
      <button onClick={goBack}>go back</button>
    </div>
  );
};
