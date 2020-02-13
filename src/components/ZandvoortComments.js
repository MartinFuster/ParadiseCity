import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Comment from "./Comment";
import CTA from "./CTA";

function ZandvoortComments() {
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
            rating="8.2"
            name="Maximilian Berger"
            review="The bed was amazing, and the staff were so friendly. I would definitely recommend it to my friends and family!"
            date="Jan 26, 2020"
          />
          <Comment
            rating="9.2"
            name="Mateo Fernandez"
            review=""
            date="Nov 10, 2019"
          />
          <Comment
            rating="7.8"
            name="Paul Watson"
            review="Location is perfect if you're visiting the race circuit. Hotel itself is clean and tidy but slightly dated. Rooms very clean but in need of a makeover, bathroom was especially tired. Staff friendly and helpful. The bar is very nice with great service, decent cold beers. I didn't try the restaurant but had bar snacks. The burger is amongst the best I've ever had."
            date="Oct 21, 2019"
          />
          <Comment
            rating="8.0"
            name="Mark Manson"
            review="Excellent location by the beach and the race circuit. Comfortable rooms, excellent breakfast. Helpful staff."
            date="Feb 9, 2020"
          />
          <Comment
            rating="9.1"
            name="Bryan Rey"
            review="Bed and breakfast was very good, breakfast buffet was very extensive with lots of choices, better than your average breakfast buffet.
I particularly liked that my dog received a biscuit on check in, and that there would be the possibility to rent a dog blanket if you didn't bring your dog's own. Also, they have special do not disturb signs that indicate to the house keeping staff there is a dog present on its own so they wouldn't enter your room then. Although dogs are not allowed in the bar and restaurant, there is the option of having a table laid out just outside the restaurant where one can take the dog."
            date="Jan 23, 2020"
          />
          <CTA
            heading="Good news! we have 1 room left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default ZandvoortComments;
