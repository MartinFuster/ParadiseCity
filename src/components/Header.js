import React from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <FontAwesomeIcon icon="search" className="search__icon-lupa" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FontAwesomeIcon icon="bookmark" className="search__icon" />
        </div>
        <div className="user-nav__user">
          <FontAwesomeIcon
            icon="user"
            alt="user picture"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Log in</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
