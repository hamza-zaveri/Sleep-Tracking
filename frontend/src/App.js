import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
//import Rout from "./Rout";
//import {Route} from 'react-router-dom';
import addData from './Components/addData';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Editprofile from './Components/EditProfile';

import Cookie from 'js-cookie'

const App = ()=> {
  const is_logged_in = Cookie.get('token') ? true : false;
  const navigate = useNavigate()
  return (
    <>
    {/* <Home/>
    <Login/>
    <Register/>
    <Dashboard/> */}
    
        <Navbar/>
        
      <Routes>

        <Route path='/' exact element = { <Home/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/login' element = { !is_logged_in ? <Login/> : navigate(-1) }/>
        <Route path='/register' element = { <Register/>}/>
        <Route path='/editprofile' element = { <Editprofile/>}/>
        <Route path='/addData' element = { <addData/>}/>
         
      </Routes>
      
      
    </>
  );
}

export default App;
