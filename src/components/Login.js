import React, { useReducer } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import { withAuth } from "../ProvideAuth";
import formReducer from "./useFormReducer";

// const formReducer = (state, e) => {
//   if (e.reset) {
//     return { email: "", password: "" };
//   }
//   return {
//     ...state,
//     [e.name]: e.value,
//   };
// };

function Login({ auth, location }) {
  const [formData, setFormData] = useReducer(formReducer, {});

  const { loginUser } = auth;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(formData);
  };

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const { message } = location.state || "";

  return (
    <div className="form-container">
      <div className="logo">
        <a href="/" className="">
          <img src="/img/logo-l.svg" alt="logo" />
        </a>
      </div>
      <div className="form-wrapper">
        <form className="form--main" onSubmit={handleSubmit}>
          <h2 className="form-header">LOGIN</h2>
          {message && <h2 className="form-header">{message}</h2>}

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
              onChange={handleChange}
              value={formData.email || ""}
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
              onChange={handleChange}
              value={formData.password || ""}
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(Login);
