import React from "react";
import defaultImage from "../img/no-image-user.png";

function Recommend(props) {
  return (
    <div className="recommend">
      <p className="recommend__count">
        {props.name} and {props.likes} others recommend this hotel.
      </p>
    </div>
  );
}

export default Recommend;
