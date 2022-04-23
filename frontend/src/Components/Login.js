import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Cookie from 'js-cookie'
const Login=()=>{
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5001/login", user)
        .then(res => {
            // console.log(res)
            if(res.data.message=="Login Successfull"){
                Cookie.set("token","abcd")
                //setLoginUser(res.data.user)
               navigate("/")
            }
            alert(res.data.message)
           
        }).catch(err=>{console.log(err)})
    }

    return(
        <>
            <section className="contact-from pt-4">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-7 mx-auto">
                        <div className="form-wrapper">
                            <div className="row">
                            <div className="col-md-12">
                                <h4>Login</h4>
                            </div>
                            </div>
                            <form _lpchecked="1">
                                <div className="row">
    
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
                                        </div>
                                    </div>
                                        
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-primary" onClick={login}>Login</button>
                                    </div>
                                    <div className="mt-2">
                                        <p>Not a member ? <Link to='/register'>Register</Link></p>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>  
        </>
    )
}
export default Login