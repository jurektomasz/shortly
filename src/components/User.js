import React from "react";

import { FaRegUser, FaRegUserCircle } from "react-icons/fa";

export default function User() {
  function handleClick() {
    const list = document.querySelector("#loggedMenu");
    list.style.visibility = "visible";
  }
  return (
    <div className="menu__user">
      <span
        onClick={handleClick}
        className="menu__link btn btn-tertiary btn-user"
      >
        <div className="user__icon">
          <FaRegUser />
        </div>
      </span>
      <ul id="loggedMenu" className="menu__user--list">
        <li className="menu__user--item">
          <a>My Shorten URL's</a>
        </li>
        <li className="menu__user--item">
          <a className="btn btn-tertiary">Logout</a>
        </li>
      </ul>
    </div>
  );
}
