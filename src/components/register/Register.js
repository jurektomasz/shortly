import React, { useReducer, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import formReducer from "../helpers/useFormReducer";

export default function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const registerUser = async (credentials) => {
    await fetch("http://localhost:3001/api/v1/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData).then(() => {
        setShouldRedirect(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return shouldRedirect ? (
    <Redirect
      to={{
        pathname: "/login",
        state: { message: "You have been succesfuly registered!" },
      }}
    />
  ) : (
    <div className="form-container">
      <div className="logo">
        <a href="/" className="">
          <img src="/img/logo-l.svg" alt="logo" />
        </a>
      </div>
      <div className="form-wrapper">
        <form className="form--main" onSubmit={handleSubmit}>
          <h2 className="form-header">Sign up</h2>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <span className="form-icon">
              <RiLockPasswordLine />
            </span>
          </div>
          <button className="btn btn-secondary btn-form">Sign up</button>
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
