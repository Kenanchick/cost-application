import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Costs } from "./Pages/Costs";
import "./App.css";
import { Layout } from "./Pages/Layout";
import { HomePage } from "./Pages/HomePage";
import { CostPage } from "./Pages/CostPage/CostPage";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { LogInPage } from "./Pages/LogInPage";
import { MyCostsAndYearsContext } from "./context/MyCostsAndYearsContext";

function App() {
  return (
    <MyCostsAndYearsContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="costs" element={<Costs />} />
          <Route path="costs/:id" element={<CostPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MyCostsAndYearsContext>
  );
}

export default App;
