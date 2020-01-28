import React from "react";
import Review from "./Review";
import InlineButton from "./InlineButton";
import user5 from "../img/user-1.jpg";
import user6 from "../img/user-2.jpg";

function UserReview() {
  return (
    <div className="user-reviews">
      <Review
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
        picture={user5}
        name="Nick Smith"
        date="Jan 17, 2020"
        rating="7.8"
      />
      <Review
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
        picture={user6}
        name="Ashley Rawson"
        date="Dec 4, 2019"
        rating="9.1"
      />
      <InlineButton text="Show all" />
    </div>
  );
}

export default UserReview;
