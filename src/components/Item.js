import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item(props) {
  return (
    <li className="list__item">
      <FontAwesomeIcon icon="chevron-right" className="list__item__icon" />
      {props.item}
    </li>
  );
}

export default Item;
