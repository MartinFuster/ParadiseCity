import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "./Copyright";
function Nav() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="" className="side-nav__link">
            <FontAwesomeIcon icon="home" className="side-nav__icon" />
            <span>Hotels</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="" className="side-nav__link">
            <FontAwesomeIcon
              icon="plane-departure"
              className="side-nav__icon"
            />
            <span>Flights</span>
          </a>
        </li>
      </ul>
      <Copyright />
    </nav>
  );
}

export default Nav;
