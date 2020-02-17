import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Comment from "./Comment";
import CTA from "./CTA";

function BlueMoonComments() {
  return (
    <section className="las-palmas-comments">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">Reviews</h1>
          </div>
          <Comment
            rating="7.1"
            name="Mark johnson"
            review="The service was quick. They have luggage storage which is easily accessible"
            date="Jan 19, 2020"
          />
          <Comment
            rating="5.3"
            name="Christina patisson"
            review="I loved the location, the view and the room was very clean. The bathroom was very clean and even pretty"
            date="Feb 7, 2020"
          />
          <Comment
            rating="6.8"
            name="Huseyn Chekov"
            review="What I liked the most is that they made the bed and you get the fresh towel every day. The mattress was comfortable. There was socket near each bed. There was shampoo, shower gel and soap in the bathroom. There is subway station with direct connection to lower Manhattan. For the price in NYC, this is a good place to stay.
There are couple of things, one must be careful about:
Every room is different than the other. So, it can be that your room is different than the photos on the internet.
Do not let them to copy your credit card. They tend to do so without even seeking your permission.
Pay the security deposit in cash. It makes it easier to get it back.
Bring your own padlock, as the room had no lockers and the luggage storage had no security system.
Do not expect friendly or chatty staff."
            date="oct 8, 2019"
          />
          <Comment
            rating="7.2"
            name="Marie Watts"
            review="For someone travelling on their own, the female dormitory rooms with 3 x bunks were ideal. You just had to be flexible with sharing of the bathroom. Great how reception is open 24hrs and that linen is changed daily with beds made."
            date="2 Jan, 2020"
          />
          <Comment
            rating="6.5"
            name="Olga Trawski"
            review="Even though check out time is a bit earlier then at some other places, you can always keep your bag for free at luggage room.
Very close to subways, has direct line that goes to Air Transfer to the airport "
            date=" dec 6, 2019"
          />
          <CTA
            heading="Good news! we have 6 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default BlueMoonComments;
