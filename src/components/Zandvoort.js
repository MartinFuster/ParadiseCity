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
            <div className="image-container">
              <FigureImage img={img1} alt="" />
            </div>
            <div className="image-container">
              <FigureImage img={img2} alt="" />
            </div>
            <div className="image-container">
              <FigureImage img={img3} alt="" />
            </div>
          </div>
          <div className="overview">
            <HotelName hotel="NH Zandvoort" />
            <Stars stars="4" />
            <Location
              location="Amsterdam, Netherlands"
              href="https://www.google.com/maps/place/Zandvoort,+Pa%C3%ADses+Bajos/@52.3810687,4.5187477,13z/data=!3m1!4b1!4m5!3m4!1s0x47c5ec1179ffa9b7:0x2410fe010d2f3dbc!8m2!3d52.3711487!4d4.533355"
            />
            <Rating rating="7.4" votes="49" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Located only 150 m from the sandy beach in Zandvoort, this hotel
                offers rooms with free Wi-Fi and cable TV. NH Zandvoort features
                spa facilities.
              </p>
              <p className="paragraph">
                A mini-bar and tea/coffee making facilities are provided as
                standard in the rooms at NH Zandvoort Hotel. Each room also
                includes a seating area and a bathroom with both a bath and
                shower.
              </p>
              <HotelItems items={items} />

              <Recommend name="Charles" likes="16" />
            </div>
            <div className="user-reviews">
              <Review
                review="The bed was amazing, and the staff were so friendly. 
                I would definitely recommend it to my friends and family!"
                name="Maximilian Berger"
                date="Jan 26, 2020"
                rating="8.2"
              />
              <Review
                review="The location and price. And also that a bus stop was directly across the street from the hotel. This made it 
                easy for us to get around because at the time we stayed taxi's we're very limited."
                name="Mateo Fernandez"
                date="Nov, 2019"
                rating="9.2"
              />
              <InlineButton text="Show all" />
            </div>
          </div>
          <CTA
            heading="Good news! we have 1 room left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default Zandvoort;
