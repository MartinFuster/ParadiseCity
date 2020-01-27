import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="legal">
      <FontAwesomeIcon icon="copyright" />
      {year} by Martin Fuster. All rights reserved.
    </div>
  );
}

export default Copyright;
