import React from 'react'
import { Link } from 'react-router-dom'
const Login=()=>{
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
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                        
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary">Login</button>
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