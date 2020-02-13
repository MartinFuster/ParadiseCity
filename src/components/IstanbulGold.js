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
import Popup from "./Popup";
import { Link } from "react-router-dom";

function IstanbulGold() {
  const items = [
    "Air conditioning",
    "Breakfast included",
    "Free wifi",
    "Family friendly"
  ];
  const images = [img1, img2, img3];
  return (
    <section className="aqueen-lavender">
      <Header />
      <div className="content">
        <Nav />
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
            <HotelName hotel="Istanbul Gold" />
            <Stars stars="3" />
            <Location
              location="Baku, Azerbaijan"
              href="https://www.google.com/maps/place/Istanbul+Gold+Baku+Hotel/@40.3976613,49.8389744,17z/data=!3m1!4b1!4m8!3m7!1s0x40307d64f1a4097f:0xbcbbd6706f1edeff!5m2!4m1!1i2!8m2!3d40.3976613!4d49.8411631"
            />
            <Rating rating="6.8" votes="16" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Istanbul Gold Hotel features a rooftop restaurant, an on-site
                café and spacious rooms with free WiFi and a flat-screen TV. It
                is 10 minutes’ drive from Topkapi and Blue Mosque.
              </p>
              <p className="paragraph">
                All rooms have a modern décor which includes carpeted floors and
                deluxe bedding. Each one is air-conditioned and has TV with
                satellite channels and comfortable armchairs in the seating
                area.
              </p>
              <HotelItems items={items} />

              <Recommend name="Lin" likes="1" />
            </div>
            <div className="user-reviews">
              <Review
                review="Beautiful views, especially from the top floor restaurant. 
                Clean room and friendly staff."
                name="Ying lu"
                date="oct 6, 2019"
                rating="7.3"
              />
              <Review
                review="It was ok but just one thing is not acceptable for me. The Hotel did not serve bottle of water 
                and tea in room and I have to go to floor 0 for them."
                name="Pedro Lomber"
                date="nov 3, 2019"
                rating="5.4"
              />
              <Link to="/istanbul-gold/comments">
                <InlineButton text="Show all" />
              </Link>
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
