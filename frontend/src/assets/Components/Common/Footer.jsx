import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faPinterest,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-primary p-3 w-100 mt-5 ">
          <div className="container d-flex align-items-center justify-content-between">
            <span className="text-white text-bold">GET IN TOUCH:</span>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter your e-mail"
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    backgroundColor: "#fff",
                    borderTopLeftRadius: "6px",
                    borderBottomLeftRadius: "6px",
                    height: "40px",
                    fontSize: "16px",
                  }}
                />
                <Button
                  variant="dark"
                  style={{
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                    width: "120px",
                    fontWeight: "500",
                    border: "none",
                    height: "40px",
                  }}
                >
                  JOIN US
                </Button>
              </InputGroup>
            </div>
            <div className="social-icons d-flex align-items-center gap-2">
              <a
                href="https://facebook.com"
                className="social-icon facebook text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/yourpage"
                className="social-icon instagram text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@yourpage"
                className="social-icon tiktok text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              {/* Email */}
              <a
                href="mailto:info@yourdomain.com"
                className="social-icon email text-white"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/yourchannel"
                className="social-icon youtube text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        {/* Main footer area */}
        <div
          style={{ backgroundColor: "#f7f8fa" }}
          className="text-dark pt-5 pb-4"
        >
          <div className="container">
            <div className="row">
              {/* Categories */}
              <div className="col-md-3 mb-4">
                <h5 className="fw-bold mb-3">CATEGORIES</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Cooker Hoods
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Wall Decor & Sheets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Pantry Cupboards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Sinks & Faucets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Kitchen Accessories
                    </a>
                  </li>
                </ul>
              </div>

              {/* Buy With Us */}
              <div className="col-md-3 mb-4">
                <h5 className="fw-bold mb-3">BUY WITH US</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-muted">
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div className="col-md-3 mb-4">
                <h5 className="fw-bold mb-3">ABOUT</h5>
                <p className="text-muted small">
                  We’re a kitchen cabinet and Italian Aluminum doors and windows
                  manufacturing company that specializes in custom-built
                  cabinets and Doors and windows for homes and commercial
                  projects.
                </p>
              </div>

              {/* Contact */}
              <div className="col-md-3 mb-4">
                <h5 className="fw-bold mb-3">CONTACT US</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="me-2 text-secondary"
                    />
                    207 Kesbewa Road, Boralasgamuwa
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="me-2 text-secondary"
                    />
                    +94 71 1006 565
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="me-2 text-secondary"
                    />
                    All week from 9 am to 9 pm
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2 text-secondary"
                    />
                    <a
                      href="mailto:info@mydomain.com"
                      className="text-decoration-none text-primary"
                    >
                      hrmdesign@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom white row */}
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="text-center text-muted small py-3 border-top"
        >
          © {new Date().getFullYear()}{" "}
          <a href="#" style={{ textDecoration: "underline" }}>
            The Anzwer IT Solutions
          </a>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
