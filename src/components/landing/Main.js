import React from "react";

import ShortenForm from "./ShortenForm";
import Features from "./Features";
import Banner from "./Banner";

export default function Main() {
  return (
    <>
      <main className="main-wrapper">
        <div className="wrapper ">
          <div className="move-content">
            <ShortenForm />
            <Features />
          </div>
        </div>
      </main>
      <Banner />
    </>
  );
}
