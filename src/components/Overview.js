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
      <Location
        location="Albufeira, Portugal"
        href="https://www.google.com.ar/maps/place/Albufeira,+Portugal/@37.1121339,-8.2530071,13z/data=!3m1!4b1!4m5!3m4!1s0xd1aceae38ddc41f:0xed22e7a562441045!8m2!3d37.0890719!4d-8.2478796"
      />
      <Rating rating="8.6" votes="429" />
    </div>
  );
}

export default Overview;
