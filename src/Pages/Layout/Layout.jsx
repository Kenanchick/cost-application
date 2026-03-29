import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cls from "./Layout.module.css";

const setActive = ({ isActive }) =>
  `${cls.link} ${isActive ? cls.activeLink : ""}`;

export const Layout = () => {
  return (
    <>
      <header className={cls.header}>
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
        <NavLink className={setActive} to="/login">
          Log In
        </NavLink>
        <NavLink className={setActive} to="/costs">
          Costs
        </NavLink>
      </header>

      <Outlet />
    </>
  );
};
