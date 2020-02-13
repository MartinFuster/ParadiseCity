import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import img1 from "../img/lavender-bed.jpg";
import img2 from "../img/lavender-2.jpg";
import img3 from "../img/lavender-4.jpg";
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

function AqueenLavender() {
  const items = [
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
            <HotelName hotel="Aqueen Lavender" />
            <Stars stars="3" />
            <Location
              location="Singapore, Singapore"
              href="https://www.google.com/maps/place/Aqueen+Hotel+Lavender/@1.3123613,103.8589768,17z/data=!3m1!4b1!4m8!3m7!1s0x31da19ceb349a161:0x7fea18be143402ed!5m2!4m1!1i2!8m2!3d1.3123613!4d103.8611655"
            />
            <Rating rating="9.2" votes="29" />
          </div>
          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Aqueen Hotel Lavender is located next to a variety of shops and
                eateries in vibrant Little India. The hotel offers
                well-appointed rooms with a 32-inch flat-screen TV and free
                Wi-Fi.
              </p>
              <p className="paragraph">
                Aqueen Hotel Lavender is 500 m from City Square Mall. Mustafa
                Center, a 24-hour shopping mall, is 701 m from the hotel.
              </p>
              <HotelItems items={items} />

              <Recommend name="Lukas" likes="43" />
            </div>
            <div className="user-reviews">
              <Review
                review="I walked through the neighborhood during the day and the night and
                 I never felt unsafe. The neighborhood did get a bit loud Friday/Saturday night but 
                 that is because it is close to some fabulous restaurants and bars. I did ask the attendant 
                 for a suggestion to a business and she was quick and friendly with the info."
                name="Lukas Rolsky"
                date="Feb 1, 2020"
                rating="9.8"
              />
              <Review
                review="Amazing location and clean rooms ! Comfortable beds"
                name="Connor Dolsk"
                date="Feb 9, 2020"
                rating="8.6"
              />
              <Link to="/aqueen-lavender/comments">
                <InlineButton text="Show all" />
              </Link>
            </div>
          </div>
          <CTA
            heading="Good news! we have 2 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default AqueenLavender;
