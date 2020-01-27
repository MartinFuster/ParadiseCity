import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faSearch,
  faBookmark,
  faComments,
  faUser,
  faHome,
  faPlaneDeparture,
  faCopyright,
  faStar,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEnvelope,
  faKey,
  faSearch,
  faBookmark,
  faComments,
  faUser,
  faHome,
  faPlaneDeparture,
  faCopyright,
  faStar,
  faMapMarkerAlt
);

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
