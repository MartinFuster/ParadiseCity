import React from "react";
import Item from "./Item";

function HotelItems(props) {
  const items = props.items;

  return (
    <ul className="list">
      {items.map((content, index) => (
        <Item key={index} item={content} />
      ))}
    </ul>
  );
}

export default HotelItems;
