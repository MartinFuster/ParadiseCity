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
        The Las Palmas hotel is a modern 5 star hotel located in Avenida da
        Liberdade. its exclusively for non smokers and offers room service, 24hs
        open reception and rooms with air conditioning, free Wi-Fi connection
        and minibar.
      </p>
      <p className="paragraph">
        The rooms in Las Palmas Hotel are docorated in natural tones with modern
        furniture and disposes smart Tvs and private bathrooms with big mirrors.
      </p>
      <HotelItems items={items} />
      <Recommend name="Lucy" likes="3" />
    </div>
  );
}

export default Description;
