import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
  };
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
                type="email"
                name="userEmail"
                id="userEmail"
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
            <button class="btn mt-3">Login</button>
          </form>
          <div class="text-center fs-6">
            <a href="/forgot" className="user">
              {" "}
              New User?{" "}
            </a>{" "}
            <a href="/register">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
