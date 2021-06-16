import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function Register() {
  return (
    <div className="form-container">
      <div className="logo">
        <a href="/" className="">
          <img src="/img/logo-l.svg" alt="logo" />
        </a>
      </div>
      <div className="form-wrapper">
        <form className="form--main">
          <h2 className="form-header">Register</h2>
          <div className="form-input__wrapper">
            <label htmlFor="registerUsername" className="form-label">
              USERNAME
            </label>
            <input
              type="text"
              className="form-input"
              id="registerUsername"
              name="username"
              placeholder="Username"
            />
            <span className="form-icon">
              <FaRegUser />
            </span>
          </div>
          <div className="form-input__wrapper">
            <label htmlFor="registerEmail" className="form-label">
              EMAIL
            </label>
            <input
              type="text"
              className="form-input"
              id="registerEmail"
              name="email"
              placeholder="Email"
            />
            <span className="form-icon">
              <HiOutlineMail />
            </span>
          </div>
          <div className="form-input__wrapper">
            <label htmlFor="registerPassword" className="form-label">
              PASSWORD
            </label>
            <input
              type="password"
              className="form-input"
              id="registerPassword"
              name="password"
              placeholder="Password"
            />
            <span className="form-icon">
              <RiLockPasswordLine />
            </span>
          </div>
          <div className="form-input__wrapper">
            <label
              htmlFor="registerPasswordConfirmation"
              className="form-label"
            >
              PASSWORD CONFIRMATION
            </label>
            <input
              type="password"
              className="form-input"
              id="registerPasswordConfirmation"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
            />
            <span className="form-icon">
              <RiLockPasswordLine />
            </span>
          </div>
          <Button text="Shorten It!" className="btn btn-secondary btn-form" />
        </form>
        <div className="member">
          <span className="member-question">Member already?</span>
          <Link to="/login" className="member-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
