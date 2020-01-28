import React from "react";
import Button from "./Button";

function CTA(props) {
  return (
    <div className="cta">
      <h2 className="cta__book-now">{props.heading}</h2>
      <Button text={props.buttonText} />
    </div>
  );
}

export default CTA;
