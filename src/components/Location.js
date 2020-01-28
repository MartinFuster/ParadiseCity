import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Location(props) {
  return (
    <div className="overview__location">
      <FontAwesomeIcon
        icon="map-marker-alt"
        className="overview__icon-location"
      />
      <button className="btn-inline">{props.location}</button>
    </div>
  );
}

export default Location;
