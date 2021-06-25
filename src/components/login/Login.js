import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withAuth } from "../../auth/ProvideAuth";
import formReducer from "../helpers/useFormReducer";

import LoginForm from "./LoginForm";

function Login({ auth, location }) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [errors, setErrors] = useState("");

  const { loginUser } = auth;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(formData).then((data) => {
      if (data.error) {
        setErrors(data.error.detail);
      }
    });
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
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          message={message}
          errors={errors}
        />
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
