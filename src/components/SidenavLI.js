import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidenavLi(props) {
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
    <li className="side-nav__item">
      <a
        href={props.href}
        className={props.className}
        id={props.id}
        onClick={handleSelection}
      >
        <FontAwesomeIcon icon={props.icon} className="side-nav__icon" />
        <span>{props.name}</span>
      </a>
    </li>
  );
}

export default SidenavLi;
