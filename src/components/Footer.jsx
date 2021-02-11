import React from "react";
import "./Footer.css";
import SmoothScroll from "smooth-scroll";

function Footer() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true,
  });
  return (
    <div className="page-footer">
      <div className="footer-copyright text-center py-3">
        <a data-scroll href="#home" className="footer-text">
          <strong>
            {" "}
            &copy; {new Date().getFullYear()} | Niks Nilo, All Rights Reserved.
          </strong>
        </a>
      </div>
    </div>
  );
}

export default Footer;
