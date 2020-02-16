import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarMobile() {
  return (
    <nav className="nav-mobile">
      <ul className="nav-list-mobile">
        <li className="item-mobile">
          <FontAwesomeIcon icon="home" />
        </li>
      </ul>
    </nav>
  );
}

export default NavbarMobile;
