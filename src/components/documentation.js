import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Documentation() {
  return (
    <div className="box-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon icon="passport" className="features-icon" />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Neccesary documentation to buy and travel
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  To buy your trip you will need your ID number, first name,
                  last name, and date of birth of each passanger. Before you
                  travel, check the Visas and vaccines demanded in your
                  destination country.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon icon="ban" className="features-icon" />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Can i modify or cancel a trip?
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  In Paradise City you can change or cancel your reservation,
                  beware that some providers dont allow it or charge an
                  additional cost for doing it.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon icon="thumbs-up" className="features-icon" />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Why choose Paradise City for your trips?
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  Paradise City is one of the travel agencies with the best
                  trayectory in the world, recognized and recommended by
                  thousands of travellers from all around the world. Take
                  advantage of our offers and travel around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
