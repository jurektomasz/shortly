import React from "react";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="wrapper footer-flex">
        <div className="logo footer-logo">
          <a className="logo__img" href="index.js">
            <img className="logo__img" src="/img/logo-l.svg" alt="logo" />
          </a>
        </div>

        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Features
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Link Shortening
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Branded Links
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Analytics
              </a>
            </li>
          </ul>

          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Resources
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Blog
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Developers
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Support
              </a>
            </li>
          </ul>

          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Company
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                About
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Our Team
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Careers
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="index.js" className="footer-nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="index.js" className="footer-social__icon">
            <img src="/img/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="index.js" className="footer-social__icon">
            <img src="/img/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="index.js" className="footer-social__icon">
            <img src="/img/icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="index.js" className="footer-social__icon">
            <img src="/img/icon-instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
