import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import img1 from "../img/blue-moon.jpg";
import img2 from "../img/blue-moon-2.jpg";
import img3 from "../img/blue-moon-3.jpg";
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

function BlueMoon() {
  const items = [
    "Air conditioning",
    "Breakfast included",
    "Free wifi",
    "Family friendly"
  ];
  return (
    <section className="blue-moon">
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
            <HotelName hotel="Blue Moon" />
            <Stars stars="3" />
            <Location location="New York, United States of America" />
            <Rating rating="6.1" votes="134" />
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

              <Recommend name="Mark" likes="9" />
            </div>
            <div className="user-reviews">
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
                name="Mark Johnson"
                date="Jan 19, 2020"
                rating="7.1"
              />
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
                name="Christina Patisson"
                date="Feb 7, 2020"
                rating="5.3"
              />
              <InlineButton text="Show all" />
            </div>
          </div>
          <CTA
            heading="Good news! we have 6 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default BlueMoon;
