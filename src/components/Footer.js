import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <ul className="footer-items">
        <li className="footer-item">
          <i class="far fa-envelope"></i>
        </li>

        <li className="footer-item">
          <i className="fab fa-instagram"></i>
        </li>

        <li className="footer-item">
          <i class="fab fa-linkedin-in"></i>
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
