import React from "react";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/zandvoort.jpg";
import img3 from "../img/blue-moon.jpg";
import img4 from "../img/lavender-bed.jpg";
import img5 from "../img/Burj-Al-Arab.jpg";
import img6 from "../img/istanbul-gold-baku.png";
import Stars from "./Stars";

import { Link } from "react-router-dom";

function RecommendedHotels() {
  const stars = 5;
  const stars2 = 4;

  const stars3 = 3;

  return (
    <section className="recommended-hotels">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Las Palmas</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">8.6</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">199</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="las-palmas" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Blue Moon</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars3} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">6.1</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">54</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="blue-moon" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">NH Zandvoort</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars2} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">7.4</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">139</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="zandvoort" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Aqueen Lavender</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars3} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">9.2</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">179</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="aqueen-lavender" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Burj Al Arab</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">10</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">999</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="burj-al-arab" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Istanbul Gold</h5>
                <span className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars3} />
                  </div>
                </span>
                <span className="card-text">
                  <div className="card-rating ">6.8</div>
                </span>
                <span className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </span>
                <span className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">69</span>/day
                  </div>
                </span>
                <div className="u-center-text">
                  <Link to="istanbul-gold" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendedHotels;
