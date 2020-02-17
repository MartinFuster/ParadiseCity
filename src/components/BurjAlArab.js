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
import Popup from "./Popup";
import { Link } from "react-router-dom";

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
  const images = [img1, img2, img3];
  return (
    <section className="aqueen-lavender">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="gallery">
            <div
              className="image-container"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <FigureImage img={img1} alt="" />
            </div>
            <div
              className="image-container"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <FigureImage img={img2} alt="" />
            </div>
            <div
              className="image-container"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <FigureImage img={img3} alt="" />
            </div>

            <Popup images={images} />
          </div>
          <div className="overview">
            <HotelName hotel="Burj Al Arab" />
            <Stars stars="5" />
            <Location
              location="Dubai, United Arab Emirates"
              href="https://www.google.com/maps/place/Burj+Al+Arab+Jumeirah+-+Jumeirah+Street+-+Dub%C3%A1i+-+Emiratos+%C3%81rabes+Unidos/@1.3123613,103.8589768,17z/data=!4m5!3m4!1s0x3e5f6a576414cf2d:0xb3da71b879f0e038!8m2!3d25.141303!4d55.1853429"
            />
            <Rating rating="10" votes="657" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Located on its own island, Burj Al Arab Jumeirah features
                ultra-luxurious suites overlooking the sea, 9 signature
                restaurants and an opulent full-service spa. Guests may arrive
                at the property by either one of the world's largest
                chauffeur-driven fleets of Rolls-Royce's or alternatively by a
                dedicated helicopter transfer service. The new terrace offers
                two swimming pools, 32 luxury cabanas, a restaurant and a bar
                transforming the hotel into a full resort.
              </p>
              <p className="paragraph">
                Featuring floor to ceiling windows with panoramic view of the
                Arabian Gulf, each suite includes an iPad, complimentary WiFi, a
                21-inch iMac, and widescreen interactive HD TV. Bose iPhone
                docking station and media hub is also available.
              </p>
              <HotelItems items={items} />

              <Recommend name="Aamir" likes="154" />
            </div>
            <div className="user-reviews">
              <Review
                review="The surprise free cake, chocolates and buffet of flowers to spice up our 10th year 
                wedding anniversary celebration."
                name="Al-karim latif"
                date="Feb 18, 2020"
                rating="10"
              />
              <Review
                review="Everything. It is the best hotel that i have ever stayed in. The check in was fabulous.The staff are amazing . 
                Very big thanks to Mr Eissa who made our stay quite pleasant"
                name="Joey Noik"
                date="Feb 13, 2020"
                rating="10"
              />
              <Link to="/burj-al-arab/comments">
                <InlineButton text="Show all" />
              </Link>
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
