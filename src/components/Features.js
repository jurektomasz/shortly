import React from "react";

export default function Features() {
  return (
    <section className="section-features">
      <div className="heading-secondary">
        <h2 className="heading-secondary--main">Advanced Statistics</h2>
        <p className="heading-secondary--sub">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <div className="bar"></div>
        <div className="card card--1">
          <div className="card__icon">
            <img
              src="/img/icon-brand-recognition.svg"
              alt="brand recognition"
            />
          </div>
          <div className="card__content">
            <h3 className="heading-tertiary heading-tertiary--main">
              Brand Recognition
            </h3>
            <p className="heading-tertiary heading-tertiary--sub">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="card card--2">
          <div className="card__icon">
            <img src="/img/icon-detailed-records.svg" alt="detailed records" />
          </div>
          <div className="card__content">
            <h3 className="heading-tertiary heading-tertiary--main">
              Detailed Records
            </h3>
            <p className="heading-tertiary heading-tertiary--sub">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="card card--3">
          <div className="card__icon">
            <img
              src="/img/icon-fully-customizable.svg"
              alt="fully customizable"
            />
          </div>
          <div className="card__content">
            <h3 className="heading-tertiary heading-tertiary--main">
              Fully Customizable
            </h3>
            <p className="heading-tertiary heading-tertiary--sub">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
