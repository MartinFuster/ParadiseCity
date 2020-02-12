import React from "react";

import img1 from "../img/hotel-1.jpg";
import img2 from "../img/hotel-2.jpg";
import img3 from "../img/hotel-3.jpg";
import { faImages } from "@fortawesome/free-solid-svg-icons";

function Popup(props) {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {props.images.map((image, index) => {
                  if (index === 0) {
                    return (
                      <div key={index} className="carousel-item active">
                        <img
                          src={image}
                          className="d-block w-100 popup__photo"
                          alt="..."
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="carousel-item">
                        <img
                          src={image}
                          className="d-block w-100 popup__photo"
                          alt="..."
                        />
                      </div>
                    );
                  }
                })}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
