import React from "react";
import SidenavLI from "./SidenavLI";
import Copyright from "./Copyright";

function Nav() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <SidenavLI
          href=""
          className="side-nav__link side-nav__selected"
          id="hotels"
          icon="home"
          name="Hotels"
          path="/"
        />
      </ul>
      <Copyright />
    </nav>
  );
}

export default Nav;
