import React from "react";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";
import CTA from "./CTA";

function Main() {
  return (
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Detail />
      <CTA
        heading="Good news! we have 4 rooms left for you"
        buttonText="Book now"
      />
    </main>
  );
}

export default Main;
