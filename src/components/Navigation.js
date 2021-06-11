import React from "react";

export default function Navigation() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
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
        <a href="index.js" className="logo__img">
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
            <a href="index.js" className="menu__link">
              Features
            </a>
          </li>
          <li className="menu__item">
            <a href="index.js" className="menu__link">
              Pricing
            </a>
          </li>
          <li className="menu__item">
            <a href="index.js" className="menu__link">
              Resources
            </a>
          </li>
        </ul>

        <ul className="menu__list">
          <li className="menu__item">
            <a href="index.js" className="menu__link">
              Login
            </a>
          </li>
          <li className="menu__item">
            <a href="index.js" className="menu__link btn btn-tertiary">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
