import React from "react";
import Review from "./Review";
import InlineButton from "./InlineButton";

function UserReview() {
  return (
    <div className="user-reviews">
      <Review
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
        name="Nick Smith"
        date="Jan 17, 2020"
        rating="7.8"
      />
      <Review
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi."
        name="Ashley Rawson"
        date="Dec 4, 2019"
        rating="9.1"
      />
      <InlineButton text="Show all" />
    </div>
  );
}

export default UserReview;
