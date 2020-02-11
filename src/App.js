import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Home from "./components/Home";
import BlueMoon from "./components/BlueMoon";
import LasPalmas from "./components/LasPalmas";
import Zandvoort from "./components/Zandvoort";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  faMapMarkerAlt,
  faChevronRight,
  faLongArrowAltRight,
  faArrowRight,
  faCheckCircle,
  faCreditCard,
  faCommentDots,
  faPassport,
  faBan,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import AqueenLavender from "./components/AqueenLavender";
import BurjAlArab from "./components/BurjAlArab";
import IstanbulGold from "./components/IstanbulGold";

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
  faMapMarkerAlt,
  faChevronRight,
  faLongArrowAltRight,
  faArrowRight,
  faCheckCircle,
  faCreditCard,
  faCommentDots,
  faPassport,
  faBan,
  faThumbsUp
);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/las-palmas" component={LasPalmas} />
          <Route path="/blue-moon" component={BlueMoon} />
          <Route path="/zandvoort" component={Zandvoort} />
          <Route path="/aqueen-lavender" component={AqueenLavender} />
          <Route path="/burj-al-arab" component={BurjAlArab} />
          <Route path="/istanbul-gold" component={IstanbulGold} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
