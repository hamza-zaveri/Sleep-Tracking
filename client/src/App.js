import React from "react";
import Footer from "./Footer";
import { BrowserRouter as Routers,Route } from "react-router-dom";
import AppAppBar from "./components/AppAppBar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Exercises from "./pages/Exercises";
import Index from "./pages/Home";
import User from "./pages/user";
import withRoot from "./components/withRoot";

function App() {
  return (
    <>
      <Routers>
        <AppAppBar />
       
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/exercise" component={Exercises}></Route>
          {/* <Route exact path="*" component={Error}></Route> */}
      
      </Routers>
      <Footer/>
    </>
  );
}
export default withRoot(App);
