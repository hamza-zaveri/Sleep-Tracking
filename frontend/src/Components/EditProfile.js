import React from 'react'
import '../Register.css'
import { Link } from 'react-router-dom'

const EditProfile=()=>{
    return(
        <>
            <section class="contact-from pt-4">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                        <div class="form-wrapper">
                            <div class="row">
                            <div class="col-md-12">
                                <h4>Edit Profile form</h4>
                            </div>
                            </div>
                            <form _lpchecked="1">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full name"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder=" Username"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">

                                        <label>Gender :</label>
                                        <br/>
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
                                                Date Of Birth:
                                                <input type="date" class="form-control"/>
                                            </div>
                                    </div>
                                    
                                    <div class="mt-3 mb-3">
                                        <button class="btn btn-primary">Edit</button>
                                    </div>

                                    
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Old Password"/>
                                            </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="New Password"/>
                                            </div>
                                    </div>
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Confirm Password"/>
                                            </div>
                                    </div>
                                        
                                    <div class="mt-3 mb-3">
                                        <button class="btn btn-primary">Change Password</button>
                                    </div>
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
export default EditProfile