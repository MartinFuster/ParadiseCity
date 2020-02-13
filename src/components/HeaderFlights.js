import React, { useState } from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

function Header() {
  const [startDate, setStartDate] = useState(null);
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <form action="#" className="search">
        <div className="search-container">
          <span className="search-indicator">Origin</span>
          <input
            type="text"
            className="search-input-text"
            placeholder="Enter your origin"
          />
        </div>
        <div className="search-container">
          <span className="search-indicator">Destintation</span>
          <input
            type="text"
            className="search-input-text"
            placeholder="Enter your destination"
          />
        </div>
        <div className="search-container">
          <span className="search-indicator">Departure</span>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
            placeholderText="Departure"
          />
        </div>
        <div className="search-container">
          <span className="search-indicator">Arrival</span>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
            placeholderText="Arrival"
          />
        </div>
        <button>Search</button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FontAwesomeIcon icon="bookmark" className="search__icon" />
        </div>
        <div className="user-nav__user">
          <FontAwesomeIcon
            icon="user"
            alt="user picture"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Log in</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
