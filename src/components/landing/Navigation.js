import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withAuth } from "../../auth/ProvideAuth";

import { FaRegUser } from "react-icons/fa";

function Navigation({ auth }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOnClick = () => {
    let menu = document.querySelector(".menu");
    if (menu.style.display === "") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "";
    }
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <a href="/" className="logo__img">
          <img src="/img/logo-d.svg" alt="logo" />
        </a>
      </div>

      {windowWidth < 801 && (
        <div className="burger-container" onClick={handleOnClick}>
          <div className="burger"></div>
        </div>
      )}

      <div className="menu">
        <ul className="menu__list menu__list--features">
          <li className="menu__item">
            <a href="/" className="menu__link">
              Features
            </a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">
              Pricing
            </a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">
              Resources
            </a>
          </li>
        </ul>

        <ul className="menu__list">
          {!auth.isAuthenticated() && (
            <>
              <>
                <li className="menu__item">
                  <Link to="/login" className="menu__link">
                    Login
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/register" className="menu__link btn btn-tertiary">
                    Sign Up
                  </Link>
                </li>
              </>
            </>
          )}
          {auth.isAuthenticated() && (
            <>
              <>
                <li className="menu__item">
                  <Link className="menu__link" to="/userUrls">
                    My Shorten URL's
                  </Link>
                </li>
                <li className="menu__item">
                  <a
                    className="btn btn-tertiary menu__link"
                    href="/"
                    onClick={auth.logoutUser}
                  >
                    Logout
                  </a>
                </li>
                <li className="menu__item menu__user">
                  <span className="menu__link btn btn-tertiary btn-user">
                    <div className="menu__user--icon">
                      <FaRegUser />
                    </div>
                  </span>
                </li>
              </>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(Navigation);
