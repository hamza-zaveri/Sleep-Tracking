import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect } from "react";

const AuthRoutes = ({ children }) => {
  const is_logged_in = Cookie.get("token") ? true : false;
  useEffect(() => {
    if (!is_logged_in) {
      <Navigate to="/login" />;
    }
  }, [is_logged_in]);
  return is_logged_in ? children : null;
};

export default AuthRoutes;
