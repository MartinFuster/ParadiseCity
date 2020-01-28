import React from "react";

function Rating(props) {
  return (
    <div className="overview__rating">
      <div className="overview__rating-average">{props.rating}</div>
      <div className="overview__rating-count">{props.votes} votes</div>
    </div>
  );
}

export default Rating;
