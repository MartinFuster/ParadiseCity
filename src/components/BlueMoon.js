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
            <HotelName hotel="Blue Moon" />
            <Stars stars="3" />
            <Location
              location="New York, United States of America"
              href="https://www.google.com/maps/place/Blue+Moon+Hotel/@40.718643,-73.9920373,17z/data=!3m1!4b1!4m8!3m7!1s0x89c25987246ba78d:0x2c75d365b88fe783!5m2!4m1!1i2!8m2!3d40.718643!4d-73.9898486"
            />
            <Rating rating="6.1" votes="134" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                This historic Lower East Side hotel is less than 3 blocks from
                the Delancy and Essex Street subway stations. It features an
                on-site cafe with fresh juices, gourmet pastries and more.
              </p>
              <p className="paragraph">
                An iPod docking station, satellite TV and free Wi-Fi are found
                in each bright, modern room of the Blue Moon Boutique Hostel &
                Hotel . A refrigerator and mini-bar are also included.
              </p>
              <HotelItems items={items} />

              <Recommend name="Mark" likes="9" />
            </div>
            <div className="user-reviews">
              <Review
                review="The service was quick. They have luggage storage 
                which is easily accessible"
                name="Mark Johnson"
                date="Jan 19, 2020"
                rating="7.1"
              />
              <Review
                review="I loved the location, the view and the room was very clean. 
                The bathroom was very clean and even pretty"
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
