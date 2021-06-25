import React from "react";
import PropTypes from "prop-types";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function RegisterForm({ handleSubmit, handleChange, errors }) {
  return (
    <form className="form--main" onSubmit={handleSubmit}>
      <h2 className="form-header">Sign up</h2>
      {errors && <h3 className="form-error">{errors}</h3>}
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
        <label htmlFor="registerPasswordConfirmation" className="form-label">
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
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};
