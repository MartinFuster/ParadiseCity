import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";
import user1 from "../img/user-3.jpg";
import user2 from "../img/user-4.jpg";
import user3 from "../img/user-5.jpg";
import user4 from "../img/user-6.jpg";
import user5 from "../img/user-1.jpg";
import user6 from "../img/user-2.jpg";

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
