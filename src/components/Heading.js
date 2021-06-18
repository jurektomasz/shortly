import React from "react";

export default function Heading() {
  return (
    <div className="main-heading">
      <div className="heading">
        <h1 className="heading-primary--main">More than just shorter links</h1>
        <p className="heading-primary--sub">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#shortenForm" className="btn btn-primary">
          Get Started
        </a>
      </div>
      <div className="main-heading__img">
        <img
          src="/img/illustration-working.svg"
          alt="illustration working"
          className="main-heading__img--img"
        />
      </div>
    </div>
  );
}
