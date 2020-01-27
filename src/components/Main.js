import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/hotel-2.jpg";
import img3 from "../img/hotel-3.jpg";
import user1 from "../img/user-3.jpg";
import user2 from "../img/user-4.jpg";
import user3 from "../img/user-5.jpg";
import user4 from "../img/user-6.jpg";

function Main() {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={img1} alt="Hotel picture 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={img2} alt="Hotel picture 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={img3} alt="Hotel picture 3" className="gallery__photo" />
        </figure>
      </div>
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
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">Modern Gym</li>
            <li className="list__item">Perfect for families</li>
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
        <div className="user-reviews">User reviews</div>
      </div>
    </main>
  );
}

export default Main;
