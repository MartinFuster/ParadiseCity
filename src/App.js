import React from "react";
import "./App.css";
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
import ScrollToTop from "./components/ScrollToTop";
import LasPalmasComments from "./components/LasPalmasComments";
import BlueMoonComments from "./components/BlueMoonComments";
import ZandvoortComments from "./components/ZandvoortComments";
import AqueenLavenderComments from "./components/AqueenLavenderComments";
import BurjAlArabComments from "./components/BurjAlArabComments";
import IstanbulGoldComments from "./components/IstanbulGoldComments";
import Flights from "./components/Flights";

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
      <ScrollToTop />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/las-palmas" exact component={LasPalmas} />
          <Route path="/las-palmas/comments" component={LasPalmasComments} />
          <Route path="/blue-moon" exact component={BlueMoon} />
          <Route path="/blue-moon/comments" component={BlueMoonComments} />
          <Route path="/zandvoort" exact component={Zandvoort} />
          <Route path="/zandvoort/comments" component={ZandvoortComments} />
          <Route path="/aqueen-lavender" exact component={AqueenLavender} />
          <Route
            path="/aqueen-lavender/comments"
            component={AqueenLavenderComments}
          />
          <Route path="/burj-al-arab" exact component={BurjAlArab} />
          <Route path="/burj-al-arab/comments" component={BurjAlArabComments} />
          <Route path="/istanbul-gold" exact component={IstanbulGold} />
          <Route
            path="/istanbul-gold/comments"
            component={IstanbulGoldComments}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
