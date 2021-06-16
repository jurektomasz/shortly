import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  return (
    <div className="form-container">
      <div className="logo">
        <a href="/" className="">
          <img src="/img/logo-l.svg" alt="logo" />
        </a>
      </div>
      <div className="form-wrapper">
        <form className="form--main">
          <h2 className="form-header">LOGIN</h2>
          <div className="form-input__wrapper">
            <label htmlFor="loginEmail" className="form-label">
              EMAIL
            </label>
            <input
              type="text"
              className="form-input"
              id="loginEmail"
              name="email"
              placeholder="Email"
            />
            <span className="form-icon">
              <HiOutlineMail />
            </span>
          </div>
          <div className="form-input__wrapper">
            <label htmlFor="loginPassword" className="form-label">
              PASSWORD
            </label>
            <input
              type="password"
              className="form-input"
              id="loginPassword"
              name="password"
              placeholder="Password"
            />
            <span className="form-icon">
              <RiLockPasswordLine />
            </span>
          </div>
          <Button text="Shorten It!" className="btn btn-secondary btn-form" />
        </form>
        <div className="member">
          <span className="member-question">Not a member?</span>
          <Link to="/register" className="member-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
