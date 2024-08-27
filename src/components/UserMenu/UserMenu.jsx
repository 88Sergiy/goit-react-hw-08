import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const UserMenu = () => {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div className={css.div}>
      <p className={css.welcome}>Welcome {username}</p>
      <Link
        className={css.link}
        to="/login"
        onClick={() => {
          dispatch(logOut());
          if (!isLogin) {
            navigate("/login");
          }
        }}
      >
        Log out
      </Link>
    </div>
  );
};

export default UserMenu;