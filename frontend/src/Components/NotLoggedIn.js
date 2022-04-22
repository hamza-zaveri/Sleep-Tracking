import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotLoggedIn = ({ children }) => {
  const navigate = useNavigate();
  const is_logged_in = Cookie.get("token");
  console.log(is_logged_in);
  useEffect(() => {
    if (is_logged_in) navigate(-1);
  }, [is_logged_in]);
  return is_logged_in ? null : children;
};

export default NotLoggedIn;
