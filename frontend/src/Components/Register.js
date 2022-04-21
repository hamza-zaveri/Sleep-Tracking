import React from 'react'
import '../Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    const [fullname, setFullname] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [dob, setDOB] = React.useState("")
    const [phoneNo, setPhoneNo] = React.useState("")

    const collectData = async () => {
        console.warn(fullname, username, email, password, dob, phoneNo);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ fullname, username, phoneNo, email, password, dob, gender }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },

        });
        result = await result.json();
        console.warn(result);
    }

    return (
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
                                                <input type="text" class="form-control" placeholder="Full name"
                                                    value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder=" Username"
                                                    value={username} onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Email"
                                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <label>Gender :</label>
                                                <br />
                                                <div class="form-check form-check-inline">

                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                                                    <label class="form-check-label" for="inlineRadio1">Female</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone number"
                                                    value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                Date Of Birth:
                                                <input type="date" class="form-control"
                                                    value={dob} onChange={(e) => setDOB(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password"
                                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary" onClick={collectData}>Register</button>
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