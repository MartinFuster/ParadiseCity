import React from "react";
import FigureImage from "./FigureImage";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/hotel-2.jpg";
import img3 from "../img/hotel-3.jpg";
import Popup from "./Popup";

function Gallery() {
  return (
    <div className="gallery">
      <div
        className="image-container"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <FigureImage img={img1} alt="" />
      </div>
      <div className="image-container">
        <FigureImage img={img2} alt="" />
      </div>
      <div className="image-container">
        <FigureImage img={img3} alt="" />
      </div>

      <Popup />
    </div>
  );
}

export default Gallery;
