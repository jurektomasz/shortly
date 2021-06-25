import React, { useEffect, useReducer, useState } from "react";
import formReducer from "../helpers/useFormReducer";
import useToken from "../helpers/useToken";
import { displayUrls } from "../helpers/displayUrls";

import { useAuth } from "../../auth/ProvideAuth";

export default function ShortenForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [storedUrls, setStoredUrls] = useState(
    JSON.parse(sessionStorage.getItem("url")) || []
  );
  const [errors, setErrors] = useState("");
  const { token } = useToken();
  const { isAuthenticated } = useAuth();

  const authHeader =
    token != null && isAuthenticated()
      ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      : {
          "Content-Type": "application/json",
        };

  useEffect(() => {
    sessionStorage.setItem("url", JSON.stringify(storedUrls));
  }, [storedUrls]);

  const createShortUrl = async (credentials) => {
    await fetch("/api/v1/shortUrls/create-short-url", {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((newUrl) => {
        storedUrls.map((existUrl) => {
          if (existUrl._id === newUrl._id) {
            throw new Error("This url was already shortened");
          }
          return null;
        });
        setStoredUrls((storedUrls) => [...storedUrls, newUrl]);
      })
      .catch((error) => setErrors(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setErrors("");
      createShortUrl(formData);
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

  return (
    <div id="shortenForm">
      <form className="shorten-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="shorten-form__input"
          name="fullUrl"
          onChange={handleChange}
          required
        />
        <button className="shorten-form__btn btn btn-secondary">
          Shorten It!
        </button>
      </form>
      <ul className="links-list">{displayUrls(storedUrls)}</ul>
      {errors && <h3 className="form-error">{errors}</h3>}
    </div>
  );
}
