import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cls from "./Layout.module.css";

const setActive = ({ isActive }) =>
  `${cls.link} ${isActive ? cls.activeLink : ""}`;

export const Layout = () => {
  return (
    <div>
      <header className={cls.header}>
        <NavLink className={setActive} to="/app">
          Home
        </NavLink>
        <NavLink className={setActive} to="/app/costs">
          Costs
        </NavLink>
      </header>
      <main className={cls.main}>
        <Outlet />
      </main>
    </div>
  );
};
