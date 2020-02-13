import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Comment from "./Comment";
import CTA from "./CTA";

function IstanbulGoldComments() {
  return (
    <section className="las-palmas-comments">
      <Header />
      <div className="content">
        <Nav />
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">Reviews</h1>
          </div>
          <Comment
            rating="7.3"
            name="Ying lu"
            review="Beautiful views, especially from the top floor restaurant. Clean room and friendly staff."
            date="Oct 6, 2019"
          />
          <Comment
            rating="5.4"
            name="Pedro Lomber"
            review="It was ok but just one thing is not acceptable for me. The Hotel did not serve bottle of water and tea in room and I have to go to floor 0 for them."
            date="Nov 3, 2019"
          />
          <Comment
            rating="6.0"
            name="Rohan Palk"
            review="If on a budget and only want a place to spend the night it’s a great place"
            date="Nov 19, 2019"
          />
          <Comment
            rating="7.5"
            name="Mirsamid Salah"
            review="The staff were doing their best to assist us. Friendly staff and clean room. The room was quiet confortable however we stayed in an economic room. Special thanks to the bellboy who directed us to the room when check in time."
            date="Jan 3, 2020"
          />
          <Comment
            rating="8.0"
            name="Shahzada Romin"
            review="Hotel Rooms was Nice & Clean , Breakfast was good as well.
The receptionist Mr. Asgat what a wonderful person he is ...cooperated & guided us a lot about Azerbaijan "
            date="Jan 29, 2020"
          />
          <CTA
            heading="Good news! we have 5 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default IstanbulGoldComments;
