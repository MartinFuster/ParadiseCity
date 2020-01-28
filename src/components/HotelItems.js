import React from "react";
import Item from "./Item";

function HotelItems(props) {
  const items = [
    "Close to the beach",
    "Free airport shuttle",
    "Air conditioning and heating",
    "Modern Gym",
    "Breakfast included",
    "Free wifi in all rooms",
    "Pets allowed",
    "Perfect for families"
  ];

  return (
    <ul className="list">
      {items.map(content => (
        <Item item={content} />
      ))}
    </ul>
  );
}

export default HotelItems;
