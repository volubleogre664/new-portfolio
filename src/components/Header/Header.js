import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);

  const linkClicked = () => setClick(!click);

  return (
    <header className="header">
      <div className="header__btn" onClick={() => setClick(!click)}>
        {click ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>

      <nav className={`header__nav ${click ? "opening" : "closing"}`}>
        <ul className="header__navList">
          <li onClick={linkClicked} className="header__navListItem active">
            <a href="/#root">Home</a>
          </li>
          <li onClick={linkClicked} className="header__navListItem">
            <a href="/#about">About</a>
          </li>
          <li onClick={linkClicked} className="header__navListItem">
            <a href="/#projects">My Work</a>
          </li>
          <li onClick={linkClicked} className="header__navListItem">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="header__contact">
        <a href="tel:+27677233428" className="header__contactCall">
          <i className="fas fa-phone-alt"></i>
        </a>

        <a href="mailto:nduduzos820@gmail.com" className="header__contactCall">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
