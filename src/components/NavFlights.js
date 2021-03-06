import React from "react";
import SidenavLI from "./SidenavLI";
import Copyright from "./Copyright";

function Nav() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <SidenavLI
          href=""
          className="side-nav__link"
          id="hotels"
          icon="home"
          name="Hotels"
          path="/"
        />
        <SidenavLI
          href=""
          className="side-nav__link side-nav__selected"
          id="flights"
          icon="plane-departure"
          name="Flights"
          path="/flights"
        />
      </ul>
      <Copyright />
    </nav>
  );
}

export default Nav;
