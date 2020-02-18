import React from "react";
import Header from "./Header";
import Comment from "./Comment";
import CTA from "./CTA";

function AqueenLavender() {
  return (
    <section className="las-palmas-comments">
      <Header />
      <div className="content">
        <div className="hotel-view">
          <div className="home-features">
            <h1 className="overview__heading u-center-text">Reviews</h1>
          </div>
          <Comment
            rating="9.8"
            name="Lukas rolski"
            review="I walked through the neighborhood during the day and the night and I never felt unsafe. The neighborhood did get a bit loud Friday/Saturday night but that is because it is close to some fabulous restaurants and bars. I did ask the attendant for a suggestion to a business and she was quick and friendly with the info."
            date="Feb 1, 2020"
          />
          <Comment
            rating="8.6"
            name="Connor Dolsk"
            review="Amazing location and clean rooms ! Comfortable beds"
            date="Feb 9, 2020"
          />
          <Comment
            rating="8.9"
            name="Kay"
            review="The room was delightful and big enough for us to have the pull-out bed without feeling crowded
The staff were very helpful and did their best to make sure we were comfortable. Particular staff that were helpful were the luggage guys at door three.
They kept a shoe that had gone on to the bed for nine days and managed to return it to us after we came back from our cruise. It was a good location to get to the cruise terminal."
            date="Oct 3, 2019"
          />
          <Comment
            rating="8.3"
            name="Erica Bauer"
            review="Fantastic room with floor to ceiling view down the river and free fireworks display every night! Nice pool area and the breezy cabana spaces were perfect fir lying around waiting for a late flight. The cafe menu was super and the staff very friendly and helpful. The gym was well equipped and clean. We will definitely be returning"
            date="Feb 2, 2020"
          />
          <Comment
            rating="7.1"
            name="Martin Vorwerk"
            review="The hotel is lovely.. good facilities etc. The room had a unusual layout as they were trying to utilize the space that was available. So it was small.
We had 2 big suitcases and had to carry them up the stairs in the room to open them. just something to note for other travelers."
            date="Dec 14, 2019"
          />
          <CTA
            heading="Good news! we have 2 rooms left for you"
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default AqueenLavender;
