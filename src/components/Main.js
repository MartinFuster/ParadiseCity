import React from "react";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";

function Main() {
  return (
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Detail />
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! we have 4 rooms left for your selected dates!
        </h2>
        <button className="btn">Book now</button>
      </div>
    </main>
  );
}

export default Main;
