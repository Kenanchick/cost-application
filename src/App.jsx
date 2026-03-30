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
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { RegistrationPage } from "./Pages/RegistrationPage";

function App() {
  return (
    <AuthProvider>
      <MyCostsAndYearsContext>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="costs"
              element={
                <RequireAuth>
                  <Costs />
                </RequireAuth>
              }
            />
            <Route path="costs/:id" element={<CostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="login" element={<LogInPage />} />
          <Route path="reg" element={<RegistrationPage />} />
        </Routes>
      </MyCostsAndYearsContext>
    </AuthProvider>
  );
}

export default App;
