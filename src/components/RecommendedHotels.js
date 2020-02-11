import React from "react";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/zandvoort.jpg";
import img3 from "../img/blue-moon.jpg";
import img4 from "../img/lavender.jpg";
import img5 from "../img/Burj-Al-Arab.jpg";
import img6 from "../img/istanbul-gold-baku.png";
import Stars from "./Stars";

import { Link } from "react-router-dom";

function RecommendedHotels() {
  const stars = 5;
  const stars2 = 4;

  const stars3 = 3;

  const stars7 = 7;
  return (
    <section className="recommended-hotels">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Las Palmas</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">8.6</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">199</span>/day
                  </div>
                </p>
                <div className="u-center-text">
                  <Link to="las-palmas" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Blue Moon</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars3} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">6.1</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">54</span>/day
                  </div>
                </p>
                <div className="u-center-text">
                  <Link to="blue-moon" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">NH Zandvoort</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars2} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">7.4</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">139</span>/day
                  </div>
                </p>
                <div className="u-center-text">
                  <Link to="zandvoort" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Aqueen Lavender</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars2} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">9.2</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">179</span>/day
                  </div>
                </p>
                <div className="u-center-text">
                  <Link to="aqueen-lavender" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Burj Al Arab</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars7} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">10</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">999</span>/day
                  </div>
                </p>
                <div className="u-center-text">
                  <Link to="burj-al-arab" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title u-center-text">Istanbul Gold</h5>
                <p className="card-text">
                  <div className="card-stars">
                    <Stars stars={stars3} />
                  </div>
                </p>
                <p className="card-text">
                  <div className="card-rating ">6.8</div>
                </p>
                <p className="card-text">
                  <div className="card-price-text">Final price per person</div>
                </p>
                <p className="card-text">
                  <div className="card-price ">
                    $<span className="card-price-number">69</span>/day
                  </div>
                </p>
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
