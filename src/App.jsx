import { Route, Routes, Navigate } from "react-router-dom";
import { Costs } from "./Pages/CostsPage";
import "./App.css";
import { Layout } from "./components/Layout";
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
          <Route path="/" element={<Navigate to="/reg" />} />
          <Route path="/reg" element={<RegistrationPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/app" element={<Layout />}>
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
        </Routes>
      </MyCostsAndYearsContext>
    </AuthProvider>
  );
}

export default App;
