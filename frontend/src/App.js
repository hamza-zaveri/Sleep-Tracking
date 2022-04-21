import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Rout from "./Rout";
//import {Route} from 'react-router-dom';
import addData from './Components/addData';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import EditProfile from './Components/EditProfile';

const App = ()=> {
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
        <Route path='/login' element = { <Login/>}/>
        <Route path='/register' element = { <Register/>}/>
        <Route path='/addData' element = { <addData/>}/>
         
      </Routes>
      
      
    </>
  );
}

export default App;
