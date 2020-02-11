import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import img1 from "../img/istanbul-gold-baku.png";
import img2 from "../img/istanbul-gold-baku-2.jpg";
import img3 from "../img/istanbul-gold-baku-3.jpg";
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

function IstanbulGold() {
  const items = [
    "Air conditioning",
    "Breakfast included",
    "Free wifi",
    "Family friendly"
  ];
  return (
    <section className="aqueen-lavender">
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
            <HotelName hotel="Istanbul Gold" />
            <Stars stars="3" />
            <Location location="Baku, Azerbaijan" />
            <Rating rating="6.8" votes="16" />
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

              <Recommend name="Lin" likes="1" />
            </div>
            <div className="user-reviews">
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
                name="Ying lu"
                date="oct 6, 2019"
                rating="7.3"
              />
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
                name="Pedro Lomber"
                date="nov 3, 2019"
                rating="5.4"
              />
              <InlineButton text="Show all" />
            </div>
          </div>
          <CTA
            heading="Good news! we have 5 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default IstanbulGold;
