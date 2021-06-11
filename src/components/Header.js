import React from "react";

import Navigation from "./Navigation";
import Heading from "./Heading";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="wrapper">
        <Navigation />
        <Heading />
      </div>
    </header>
  );
}
