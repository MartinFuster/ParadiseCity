import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "./Gallery";
import user1 from "../img/user-3.jpg";
import user2 from "../img/user-4.jpg";
import user3 from "../img/user-5.jpg";
import user4 from "../img/user-6.jpg";
import user5 from "../img/user-1.jpg";
import user6 from "../img/user-2.jpg";

function Main() {
  return (
    <main className="hotel-view">
      <Gallery />
      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>

        <div className="overview__stars">
          <FontAwesomeIcon icon="star" className="overview__icon-star" />
          <FontAwesomeIcon icon="star" className="overview__icon-star" />
          <FontAwesomeIcon icon="star" className="overview__icon-star" />
          <FontAwesomeIcon icon="star" className="overview__icon-star" />
          <FontAwesomeIcon icon="star" className="overview__icon-star" />
        </div>
        <div className="overview__location">
          <FontAwesomeIcon
            icon="map-marker-alt"
            className="overview__icon-location"
          />
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Close to the beach
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Breakfast included
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Free airport shuttle
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Free wifi in all rooms
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Air conditioning and heating
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Pets allowed
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Modern Gym
            </li>
            <li className="list__item">
              <FontAwesomeIcon
                icon="chevron-right"
                className="list__item__icon"
              />
              Perfect for families
            </li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 others recommend this hotel.
            </p>
            <div className="recomend__friends">
              <img src={user1} alt="" className="recommend__photo" />
              <img src={user2} alt="" className="recommend__photo" />
              <img src={user3} alt="" className="recommend__photo" />
              <img src={user4} alt="" className="recommend__photo" />
            </div>
          </div>
        </div>
        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
              <img src={user5} alt="" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Nick Smith</p>
                <p className="review__user-date">Jan 17, 2020</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className="review__user">
              <img src={user6} alt="" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Ashley Rawson</p>
                <p className="review__user-date">Dec 4, 2019</p>
              </div>
              <div className="review__rating">9.1</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all
            <span>
              <FontAwesomeIcon
                icon="long-arrow-alt-right"
                className="btn-inline__arrow"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! we have 4 rooms left for your selected dates!
        </h2>
        <button className="btn">Book now</button>
      </div>
    </main>
  );
}

export default Main;
