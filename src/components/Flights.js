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
          <div className="container">
            <form action="#" className="search">
              <div className="search-container">
                <span className="search-indicator-mobile">Departure</span>
                <input
                  type="text"
                  className="search-input-text-mobile"
                  placeholder="Enter your origin"
                />
                <span className="search-indicator">Arrival</span>
                <input
                  type="text"
                  className="search-input-text"
                  placeholder="Enter your destination"
                />
                <span className="search-indicator">&nbsp;</span>
                <button type="submit" className="btn-small">
                  Search
                </button>
              </div>
            </form>
          </div>
          <Features />

          <Documentation />
        </div>
      </div>
    </section>
  );
}

export default Flights;
