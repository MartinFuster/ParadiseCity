import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <ul className="footer-items">
        <li className="footer-item">
          <a
            href="mailto:martinfuster3@gmail.com"
            className="footer-item"
            aria-label="email"
          >
            <i className="far fa-envelope"></i>
          </a>
        </li>

        <li className="footer-item">
          <a
            href="https://www.instagram.com/mrtinfuster/"
            className="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>

        <li className="footer-item">
          <a
            href="https://www.linkedin.com/in/martin-fuster-7b1b381a2/"
            className="footer-item"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <div className="copyright-box">
        <FontAwesomeIcon icon="copyright" />
        &nbsp; {year} by Martin Fuster. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
