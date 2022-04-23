import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//import Rout from "./Rout";
//import {Route} from 'react-router-dom';
import addData from "./Components/addData";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Editprofile from "./Components/EditProfile";

import Cookie from "js-cookie";
import AuthRoutes from "./Components/authRoutes";
import NotLoggedIn from "./Components/NotLoggedIn";
const App = () => {
  const is_logged_in = Cookie.get("token") ? true : false;
  const navigate = useNavigate();
  return (
    <>
      {/* <Home/>
    <Login/>
    <Register/>
    <Dashboard/> */}

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            <NotLoggedIn>
              <Login />
            </NotLoggedIn>
          }
          exact
        />
        <Route
          path="/register"
          element={
            <NotLoggedIn>
              <Register />
            </NotLoggedIn>
          }
          exact
        />
        <Route
          path="/editprofile"
          element={
            <AuthRoutes>
              <Editprofile />
            </AuthRoutes>
          }
        />
        {/* <Route path="/addData" element={<addData />} /> */}
      </Routes>
    </>
  );
};

export default App;
