import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PublicRoute = ({ component: Component, restricted = false }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  React.useEffect(() => {
    if (isLoggedIn && restricted) {
      navigate("/contacts"); // Перенаправлення на приватний маршрут
    }
  }, [isLoggedIn, navigate, restricted]);

  return isLoggedIn && restricted ? null : <Component />;
};

export default PublicRoute;