import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SidenavLi(props) {
  return (
    <Link to={props.path} className="u-no-text-decoration">
      <li className="side-nav__item">
        <a href={props.href} className={props.className} id={props.id}>
          <FontAwesomeIcon icon={props.icon} className="side-nav__icon" />
          <span>{props.name}</span>
        </a>
      </li>
    </Link>
  );
}

export default SidenavLi;
