import React from "react";

import Button from "./Button";

export default function Banner() {
  return (
    <div className="banner">
      <h2 className="heading-secondary--main">Boost your links today</h2>
      <Button text="Get Started" className="btn btn-primary" />
    </div>
  );
}
