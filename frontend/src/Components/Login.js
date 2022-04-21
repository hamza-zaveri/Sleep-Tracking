import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login=()=>{
    const [username, setUsername] =React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate();
    const signIn=async()=>{
        console.warn("username,password",username,password);
        let result= await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({username,password}),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.username){
            localStorage.set("use",JSON.stringify(result));
            navigate("/");
        }else{
            alert("Invalid Details");
        }
    }

    // const navigate = useNavigate();
    // React.useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         //history.push("/")
    //         //navigate("/")y
    //     }
    // }, [])

    // async function signIn() {
    //     console.warn(email, password)
    //     let item = { email, password };
    //     console.log("d ", item);
    //     let result = await fetch("http://localhost:5000/login", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     alert(result);
    //     console.warn("r ",result);
    //     localStorage.setItem("user-info", JSON.stringify(result))
    //     // history.push("/");
    //     //navigate("/")
    // }

    return(
        <>
            <section class="contact-from pt-4">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                        <div class="form-wrapper">
                            <div class="row">
                            <div class="col-md-12">
                                <h4>Login</h4>
                            </div>
                            </div>
                            <form _lpchecked="1">
                                <div class="row">
    
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                        
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary" onClick={signIn}>Login</button>
                                    </div>
                                    <div class="mt-2">
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