import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Costs } from "./Pages/Costs";
import "./App.css";
import { Layout } from "./Pages/Layout";
import { HomePage } from "./Pages/HomePage";

import { CostPage } from "./Pages/CostPage/CostPage";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { LogInPage } from "./Pages/LogInPage";

function App() {
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
  const [selectYears, setSelectYears] = useState([]);

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="costs"
            element={
              <Costs
                costs={costs}
                setCosts={setCosts}
                selectYears={selectYears}
                setSelectYears={setSelectYears}
              />
            }
          />
          <Route path="costs/:id" element={<CostPage costs={costs} />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
