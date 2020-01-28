import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars(props) {
  const stars = [];
  const amountOfStars = props.stars;
  for (let i = 0; i < amountOfStars; i++) {
    stars.push(<FontAwesomeIcon icon="star" className="overview__icon-star" />);
  }
  return <div className="overview__stars">{stars}</div>;
}

export default Stars;
