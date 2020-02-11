import React from "react";
import Item from "./Item";

function HotelItems(props) {
  const items = props.items;

  return (
    <ul className="list">
      {items.map(content => (
        <Item item={content} />
      ))}
    </ul>
  );
}

export default HotelItems;
