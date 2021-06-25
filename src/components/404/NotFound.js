import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found__container">
      <div className="not-found__wrapper">
        <div className="not-found__number">404</div>
        <div className="not-found__text">Oops! Sorry, page not found.</div>
        <Link to={{ pathname: "/" }} className="btn btn-primary">
          Go home
        </Link>
      </div>
    </div>
  );
}
