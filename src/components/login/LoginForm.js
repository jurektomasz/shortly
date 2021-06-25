import React from "react";
import PropTypes from "prop-types";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LoginForm({
  handleSubmit,
  handleChange,
  formData,
  message,
  errors,
}) {
  return (
    <form className="form--main" onSubmit={handleSubmit}>
      <h2 className="form-header">LOGIN</h2>
      {message && <h3 className="form-registered">{message}</h3>}
      {errors && <h3 className="form-error">{errors}</h3>}

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
      <button className="btn btn-secondary btn-form">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};
