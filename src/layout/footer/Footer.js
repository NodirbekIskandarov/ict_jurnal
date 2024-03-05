import React from "react";
import "./footer.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col1">
            <img src={logo} alt="logo" />
          </div>
          <div className="col2">
            <div className="col21">
              <h2>
                <Link to="/">Asosiy</Link>
              </h2>
              <p><Link to="/">Yangiliklar</Link></p>
              <p><Link to="/">Konferensiyalar</Link></p>
              <p><Link to="/">Homiylar</Link></p>
            </div>

            <div className="col21">
              <h2>
                <Link to="/">Biz haqimizda</Link>
              </h2>
              <p><Link to="/">Homiylar</Link></p>
              <p><Link to="/">Second Link</Link></p>
              <p><Link to="/">Third Link</Link></p>
            </div>

            <div className="col-22">
              <h2>
                <Link to="/">Aloqa</Link>
              </h2>
              <p>+998 99 999 99 99</p>
              <div className="socials">
                <div className="social">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="social">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="social">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
