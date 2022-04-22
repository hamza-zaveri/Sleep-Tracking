import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
const Navbar = () => {
  const is_logged_in = Cookie.get("token") ? true : false;
  const navigate=useNavigate();
  const logout=()=>{

      Cookie.remove('token');
      navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="#">
          Sleep Tracking System
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-4"
          id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            

            {!is_logged_in ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    <span className="glyphicon glyphicon-user"></span> Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={logout}>
                  <span className="glyphicon glyphicon-log-in" ></span> Log Out
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/editprofile">
                <span className="glyphicon glyphicon-log-in"></span> EditProfile
              </NavLink>
            </li></>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
