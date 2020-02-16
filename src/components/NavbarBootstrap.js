import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/logo.png";

function NavbarBootstrap() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <div className="navbar-center">
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
        </div>
      </div>
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
    </nav>
  );
}

export default NavbarBootstrap;
