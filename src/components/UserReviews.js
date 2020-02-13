import React from "react";
import Review from "./Review";
import InlineButton from "./InlineButton";
import { Link } from "react-router-dom";

function UserReview() {
  return (
    <div className="user-reviews">
      <Review
        review="Everything was perfect. Personnel very friendly and helpful. 
        Walking distance to stores and restaurants. Great"
        name="Nick Smith"
        date="Jan 17, 2020"
        rating="9.1"
      />
      <Review
        review="Very comfortable and practical. Really good location to everything. 
        Right beside a metro that is 4 stops away from the city centre. Very nice walk to the 
        city centre as well, just 25mins."
        name="Ashley Rawson"
        date="Dec 4, 2019"
        rating="7.8"
      />
      <Link to="/las-palmas/comments">
        <InlineButton text="Show all" />
      </Link>
    </div>
  );
}

export default UserReview;
