import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="register">
        <div class="wrapper">
          <div class="logo1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111585.png"
              alt=""
            />
          </div>
          <div class="text-center mt-4 name">Quora</div>
          <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
              />
            </div>

            <div class="form-field d-flex align-items-center">
              <span class="far fa-envelope"></span>
              <input
                type="email"
                name="useremail"
                id="userName"
                placeholder="Email"
              />
            </div>

            <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>

            <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input
                type="password"
                name="confirmpassword"
                id="pwd"
                placeholder="ConfirmPassword"
              />
            </div>

            <button class="btn mt-3"> Create Account</button>
          </form>
          <div class="text-center fs-6">
            <a href="/ok" className="user">
              Already User?
            </a>
            <span
              style={{
                color: "#009688",
                fontWeight: "bold",
                marginLeft: "4px",
              }}
            >
              <a href="/">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
