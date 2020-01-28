import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "./Copyright";
function Nav() {
  function handleSelection(event) {
    event.preventDefault();
    const id = event.target.id;
    const clickedElement = document.getElementById(id);
    const navItems = document.getElementsByClassName("side-nav__link");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("side-nav__selected");
    }

    clickedElement.classList.add("side-nav__selected");
  }

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a
            href=""
            className="side-nav__link side-nav__selected"
            id="hotels"
            onClick={handleSelection}
            key="1"
          >
            <FontAwesomeIcon icon="home" className="side-nav__icon" />
            <span>Hotels</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a
            href=""
            className="side-nav__link"
            onClick={handleSelection}
            id="flights"
            key="2"
          >
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
