import React from "react";
import Description from "./Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user5 from "../img/user-1.jpg";
import user6 from "../img/user-2.jpg";

function Detail() {
  return (
    <div className="detail">
      <Description />
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
  );
}

export default Detail;
