import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={css.link}
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={css.link}
          style={({ isActive }) => {
            return isActive ? { color: "green" } : {};
          }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;