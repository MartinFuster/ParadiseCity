import React from "react";

function FigureImage(props) {
  return (
    <figure className="gallery__item">
      <img src={props.img} alt={props.alt} className="gallery__photo" />
    </figure>
  );
}

export default FigureImage;
