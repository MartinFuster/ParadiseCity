import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import img1 from "../img/zandvoort.jpg";
import img2 from "../img/zandvoort-2.jpg";
import img3 from "../img/zandvoort-3.jpg";
import FigureImage from "./FigureImage";
import HotelName from "./HotelName";
import Stars from "./Stars";
import Location from "./Location";
import Rating from "./Rating";
import HotelItems from "./HotelItems";
import Recommend from "./Recommend";
import Review from "./Review";
import InlineButton from "./InlineButton";
import CTA from "./CTA";

function Zandvoort() {
  const items = [
    "Close to the beach",
    "Air conditioning",
    "Modern Gym",
    "Breakfast included",
    "Free wifi",
    "Family friendly"
  ];
  return (
    <section className="zandvoort">
      <Header />
      <div className="content">
        <Nav />
        <div className="hotel-view">
          <div className="gallery">
            <FigureImage img={img1} alt="" />

            <FigureImage img={img2} alt="" />

            <FigureImage img={img3} alt="" />
          </div>
          <div className="overview">
            <HotelName hotel="NH Zandvoort" />
            <Stars stars="4" />
            <Location location="Amsterdam, Netherlands" />
            <Rating rating="7.4" votes="49" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <HotelItems items={items} />

              <Recommend name="Charles" likes="16" />
            </div>
            <div className="user-reviews">
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
                name="Maximilian Berger"
                date="Jan 26, 2020"
                rating="8.2"
              />
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
                name="Mateo Fernandez"
                date="Nov, 2019"
                rating="9.2"
              />
              <InlineButton text="Show all" />
            </div>
          </div>
          <CTA
            heading="Good news! we have 1 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default Zandvoort;
