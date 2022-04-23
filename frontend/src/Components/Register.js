import "../Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phoneNo: "",
    gender:"",
    dob: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, username, email, phoneNo,gender,dob, password, reEnterPassword } =
      user;
    if (
      name &&
      username &&
      email &&
      phoneNo &&
      gender &&
      dob &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:5001/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
      <section className="contact-from pt-4">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-7 mx-auto">
              <div className="form-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Registration form</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        name="phoneNo"
                        value={user.phoneNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Gender :</label>
                      <br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio1"
                          value="Male"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio2"
                          value="Female"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      Date Of Birth:
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-Enter Password"
                        name="reEnterPassword"
                        value={user.reEnterPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary" onClick={register}>
                    Register
                  </button>
                </div>
                <div className="mt-2">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
