import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import img1 from "../img/Burj-Al-Arab.jpg";
import img2 from "../img/burj-al-arab-2.jpg";
import img3 from "../img/burj-al-arab-3.jpg";
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

function BurjAlArab() {
  const items = [
    "Close to the beach",
    "Free airport shuttle",
    "Air conditioning",
    "Modern Gym",
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
            <HotelName hotel="Burj Al Arab" />
            <Stars stars="7" />
            <Location location="Dubai, United Arab Emirates" />
            <Rating rating="10" votes="657" />
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

              <Recommend name="Aamir" likes="154" />
            </div>
            <div className="user-reviews">
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
                name="Al-karim latif"
                date="Feb 18, 2020"
                rating="10"
              />
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
                name="Joey Noik"
                date="Feb 13, 2020"
                rating="10"
              />
              <InlineButton text="Show all" />
            </div>
          </div>
          <CTA
            heading="Good news! we have 8 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default BurjAlArab;
