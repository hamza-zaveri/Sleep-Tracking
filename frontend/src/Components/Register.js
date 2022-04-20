import React from 'react'
import '../Register.css'
import { Link } from 'react-router-dom'

const Register=()=>{
    return(
        <>
            <section class="contact-from pt-4">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                        <div class="form-wrapper">
                            <div class="row">
                            <div class="col-md-12">
                                <h4>Registration form</h4>
                            </div>
                            </div>
                            <form _lpchecked="1">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First name"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last name"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1"/>
        <label class="form-check-label" for="inlineRadio1">Female</label>
    </div>
                                        </div>
                                    </div>
                                
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone number"/>
                                            </div>
                                        </div>
                                    
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="date" class="form-control"/>
                                            </div>
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <select name="countries" class="custom-select" id="exampleFormControlSelect1">
                                        <option>Select country</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>France</option>
                                        <option>China</option>
                                        <option>Japan</option>                         
                                        </select>
                                    </div>
                                        
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary">Register</button>
                                    </div>
                                    <div class="mt-2">
                                        <p>Already have an account? <Link to='/login'>Login</Link></p>
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
export default Register