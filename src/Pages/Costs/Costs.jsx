import cls from "./Costs.module.css";
import { useState } from "react";

import { CostList } from "./components/CostList";
import { Form } from "./components/Form";
import { useAuth } from "../../hoc/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Costs = () => {
  const navigate = useNavigate();

  const { signOut } = useAuth();

  return (
    <div className={cls.homePage}>
      <Form />
      <CostList />
      <button onClick={() => signOut(() => navigate("/"))}>Log Out</button>
    </div>
  );
};
