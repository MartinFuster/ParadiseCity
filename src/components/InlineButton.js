import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InlineButton(props) {
  return (
    <button className="btn-inline">
      {props.text}
      <span>
        <FontAwesomeIcon
          icon="long-arrow-alt-right"
          className="btn-inline__arrow"
        />
      </span>
    </button>
  );
}

export default InlineButton;
