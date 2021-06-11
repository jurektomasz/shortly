import React from "react";
import Button from "./Button";

export default function Form() {
  return (
    <div>
      <form className="shorten-form" onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="shorten-form__input"
          onChange={() => {}}
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
