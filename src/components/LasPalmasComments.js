import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Comment from "./Comment";
import CTA from "./CTA";

function LasPalmasComments() {
  return (
    <section className="las-palmas-comments">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">Reviews</h1>
          </div>
          <Comment
            rating="9.1"
            name="Nick Smith"
            review="Everything was perfect. Personnel very friendly and helpful. Walking distance to stores and restaurants. Great"
            date="Jan 17, 2020"
          />
          <Comment
            rating="7.8"
            name="Ashley Rawson"
            review="Very comfortable and practical. Really good location to everything. Right beside a metro that is 4 stops away from the city centre. Very nice walk to the city centre as well, just 25mins."
            date="Dec 4, 2019"
          />
          <Comment
            rating="7.6"
            name="Stephen King"
            review="Room was very good for the $. Breakfast was fine. Location was excellent. Staff all excellent"
            date="nov 24, 2019"
          />
          <Comment
            rating="8.3"
            name="David Gonzales"
            review="I like the location. Cleanliness, the way it was decoreted, rapid check-in and check out."
            date="nov 16, 2019"
          />
          <Comment
            rating="9.2"
            name="Ilram Nich"
            review="The elevator system and the gym. Also the smell of the hotel was nice."
            date="nov 7, 2019"
          />
          <CTA
            heading="Good news! we have 4 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default LasPalmasComments;
