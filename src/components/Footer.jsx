import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="page-footer">
      <div className="footer-copyright text-center py-3">
        <strong>
          {" "}
          &copy; {new Date().getFullYear()}| Niks Nilo, All Rights Reserved.
        </strong>
      </div>
    </div>
  );
}

export default Footer;
