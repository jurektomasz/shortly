import React, { useReducer } from "react";
import Button from "./Button";
import formReducer from "./useFormReducer";

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const createShortUrl = async (credentials) => {
    await fetch("http://localhost:3001/api/v1/shortUrls/create-short-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem("url", JSON.stringify(data)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createShortUrl(formData);

      console.log(localStorage.getItem("url"));
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
        />
        <Button
          text="Shorten It!"
          className="shorten-form__btn btn btn-secondary"
        />
      </form>
      <div className="links-list"></div>
    </div>
  );
}
