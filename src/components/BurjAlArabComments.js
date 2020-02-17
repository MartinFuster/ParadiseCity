import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Comment from "./Comment";
import CTA from "./CTA";

function BurjAlArabComments() {
  return (
    <section className="las-palmas-comments">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">Reviews</h1>
          </div>
          <Comment
            rating="10"
            name="al-karim latif"
            review="The surprise free cake, chocolates and buffet of flowers to spice up our 10th year wedding anniversary celebration."
            date="Feb 18, 2020"
          />
          <Comment
            rating="10"
            name="Joey noik"
            review="Everything. It is the best hotel that i have ever stayed in. The check in was fabulous.The staff are amazing . Very big thanks to Mr Eissa who made our stay quite pleasant"
            date="Feb 13, 2020"
          />
          <Comment
            rating="9.8"
            name="Simon Clor"
            review="The hotel titles itself like the most luxury hotel. From six 5-star hotel I had opportunity to visit in UAE (Jebel Dhanna, Anantara Qasr AS, Pallace Downtown, Park Hyatt Dubai, Al Maha) it's significantly the most opulent luxury. If you are worth to spend money for 170 m2 suite in two floors, with double restroom, grand bathroom, own imperial style stairs, surrounded by gold color everywhere, this is your choice. If you add phenomenal external, but especially internal architecture - that airy open monster space inside of the hotel, perfect services of hotel background, you will get outstanding cocktail. To be in the hotel is experience. The hotel is the experience. From hotel services I would like to apreciate in dining service. I enjoyed steamed halibut a lot! I very hope for another but longer opportunity for next stay there :)"
            date="Jan 16, 2020"
          />
          <Comment
            rating="10"
            name="Elizabeth"
            review="Amazing experience from the pick up from airport and upon arrival we were treated with respect and everything was beyond luxurious.💕💕beautiful hotel and the stuff are always there to assist you and direct you to the right places"
            date="Dec 19, 2020"
          />
          <Comment
            rating="10"
            name="Ryan Luteffi"
            review="The Staff was very very helpful and made me and my fiancé feel like royalty. Mr Aashrit was excellent assistance and a very helpful polite person. I look forward to meeting him again in the near future. Great experience.Thanks, Ryan & Jane"
            date="Jan 13, 2020"
          />
          <CTA
            heading="Good news! we have 8 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default BurjAlArabComments;
