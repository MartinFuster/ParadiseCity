import React from "react";
import Stars from "./Stars";
import Location from "./Location";
import Rating from "./Rating";
import HotelName from "./HotelName";

function Overview() {
  const stars = 5;

  return (
    <div className="overview">
      <HotelName hotel="las palmas" />
      <Stars stars={stars} />
      <Location location="Albufeira, Portugal" />
      <Rating rating="8.6" votes="429" />
    </div>
  );
}

export default Overview;
