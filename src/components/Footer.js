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
            class="far fa-envelope footer-item"
          ></a>
        </li>

        <li className="footer-item">
          <a
            href="https://www.instagram.com/mrtinfuster/"
            className="fab fa-instagram footer-item"
            target="_blank"
          ></a>
        </li>

        <li className="footer-item">
          <a
            href="https://www.linkedin.com/in/martin-fuster-7b1b381a2/"
            class="fab fa-linkedin-in footer-item"
            target="_blank"
          ></a>
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
