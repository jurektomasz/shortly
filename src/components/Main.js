import React from "react";

import Form from "./Form";
import Features from "./Features";
import Banner from "./Banner";

export default function Main() {
  return (
    <>
      <main className="main-wrapper">
        <div className="wrapper ">
          <div className="move-content">
            <Form />
            <Features />
          </div>
        </div>
      </main>
      <Banner />
    </>
  );
}
