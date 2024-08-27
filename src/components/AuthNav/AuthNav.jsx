import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.div}>
      <NavLink
        to="/register"
        className={css.link}
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={css.link}
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;