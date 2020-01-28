import React from "react";
import FigureImage from "./FigureImage";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/hotel-2.jpg";
import img3 from "../img/hotel-3.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <FigureImage img={img1} alt="" />
      <FigureImage img={img2} alt="" />
      <FigureImage img={img3} alt="" />
    </div>
  );
}

export default Gallery;
