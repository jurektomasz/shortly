import React, { useReducer, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import RegisterForm from "./RegisterForm";

import { registrationValidation } from "./validation";

import formReducer from "../helpers/useFormReducer";

export default function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState("");

  const registerUser = async (credentials) => {
    const data = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = registrationValidation(formData);
    setErrors(isValid);

    if (!isValid) {
      await registerUser(formData).then((data) => {
        if (data.error) {
          setErrors(data.error.detail);
        } else {
          setShouldRedirect(true);
        }
      });
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
        state: { message: "You have been successfully registered!" },
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
        <RegisterForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />

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
