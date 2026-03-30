import { useContext, useState, createContext } from "react";
import { DEFAULT_YEARS } from "../constans/defaultYears";

export const CostsAndYearsContext = createContext("without provider");

export const MyCostsAndYearsContext = ({ children }) => {
  const [costs, setCosts] = useState([
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Холодильник",
      price: "1200",
      date: new Date(2024, 7, 10),
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "MacBook",
      price: "2000",
      date: new Date(2023, 5, 15),
    },
  ]);
  // const [selectYears, setSelectYears] = useState(DEFAULT_YEARS);
  const costsDate = costs.map((cost) => cost.date.getFullYear());
  const selectYears = [...new Set([...DEFAULT_YEARS, ...costsDate])];
  return (
    <CostsAndYearsContext.Provider value={{ costs, setCosts, selectYears }}>
      {children}
    </CostsAndYearsContext.Provider>
  );
};

export const useCostsAndYears = () => useContext(CostsAndYearsContext);
