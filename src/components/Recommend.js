import React from "react";
import user1 from "../img/user-3.jpg";
import user2 from "../img/user-4.jpg";
import user3 from "../img/user-5.jpg";
import user4 from "../img/user-6.jpg";

function Recommend(props) {
  const pictures = [user1, user2, user3, user4];
  return (
    <div className="recommend">
      <p className="recommend__count">
        {props.name} and {props.likes} others recommend this hotel.
      </p>
      <div className="recomend__friends">
        {pictures.map(picture => (
          <img src={picture} alt="" className="recommend__photo" />
        ))}
      </div>
    </div>
  );
}

export default Recommend;
