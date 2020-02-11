import React from "react";
import HotelItems from "./HotelItems";
import Recommend from "./Recommend";

function Description() {
  const items = [
    "Close to the beach",
    "Free airport shuttle",
    "Air conditioning",
    "Modern Gym",
    "Breakfast included",
    "Free wifi",
    "Pet friendly",
    "Family friendly"
  ];

  return (
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <HotelItems items={items} />
      <Recommend name="Lucy" likes="3" />
    </div>
  );
}

export default Description;
