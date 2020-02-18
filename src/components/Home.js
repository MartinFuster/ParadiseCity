import React from "react";
import Header from "./Header";
import Features from "./Features";
import RecommendedHotels from "./RecommendedHotels";
import Documentation from "./documentation";
import Footer from "./Footer";

function Home() {
  return (
    <section className="home">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">
              Pick Paradise City for your trips!
            </h1>
          </div>
          <Features />
          <div className="home-features">
            <h1 className="overview__heading u-center-text">
              Offers you cannot miss
            </h1>
          </div>
          <RecommendedHotels />

          <div className="home-features">
            <h1 className="overview__heading u-center-text">
              What you will need to start
            </h1>
          </div>
          <Documentation />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Home;
