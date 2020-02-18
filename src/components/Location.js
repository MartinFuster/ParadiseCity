import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Location(props) {
  return (
    <div className="overview__location">
      <FontAwesomeIcon
        icon="map-marker-alt"
        className="overview__icon-location"
      />
      <a
        className="btn-inline"
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
      >
        {props.location}
      </a>
    </div>
  );
}

export default Location;
