import React from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <form action="#" className="search">
        <div className="search-container">
          <span className="search-indicator">Departure</span>
          <input
            type="text"
            className="search-input-text"
            placeholder="Enter your origin"
          />
        </div>
        <div className="search-container">
          <span className="search-indicator">Arrival</span>
          <input
            type="text"
            className="search-input-text"
            placeholder="Enter your destination"
          />
        </div>
        <div className="search-container">
          <span className="search-indicator">&nbsp;</span>
          <button type="submit" className="btn-small">
            Search
          </button>
        </div>
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
