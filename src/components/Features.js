import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features() {
  return (
    <div className="box-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon
                  icon="check-circle"
                  className="features-icon"
                />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Buy your dream trip easily and quickly with our search engine
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  Get everything you need for your next trip easily and securely
                  from our website, built for you with the most efficient and
                  cutting edge technology available in the world
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon icon="credit-card" className="features-icon" />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Take advantage of payment options and benefits
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  Travelling is the only thing that makes you richer by
                  spending, thats why we offer the best payment methods for you.
                  You can pay in dues, with 2 credit cards or in cash.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="features-card">
              <div className="features__icon-box">
                <FontAwesomeIcon
                  icon="comment-dots"
                  className="features-icon"
                />
              </div>
              <div className="features__title">
                <h3 className="features__title-header">
                  Thousands of travellers trust in Paradise City
                </h3>
              </div>
              <div className="features__paragraph">
                <p className="features__paragraph-text">
                  By buying with us you know that everything is gonna be
                  alright, because we are the agency with the best trayectory in
                  the world, thats why lots of people choose us and recommend
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
