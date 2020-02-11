import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="legal">
      <div className="container">
        <ul className="footer-list">
          <li className="footer-item">
            <i class="far fa-envelope"></i>
          </li>

          <li className="footer-item">
            <i class="fab fa-instagram"></i>
          </li>
          <li className="footer-item">
            <i class="fab fa-linkedin-in"></i>
          </li>
        </ul>
        <FontAwesomeIcon icon="copyright" />
        &nbsp; {year} by Martin Fuster. All rights reserved.
      </div>
    </div>
  );
}

export default Copyright;
