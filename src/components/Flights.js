import React from "react";
import HeaderFlights from "./HeaderFlights";
import NavFlights from "./NavFlights";
import Features from "./Features";
import RecommendedHotels from "./RecommendedHotels";
import Documentation from "./documentation";

function Flights() {
  return (
    <section className="home">
      <HeaderFlights />
      <div className="content">
        <NavFlights />
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">
              Pick Paradise City for your trips!
            </h1>
          </div>
          <Features />

          <Documentation />
        </div>
      </div>
    </section>
  );
}

export default Flights;
