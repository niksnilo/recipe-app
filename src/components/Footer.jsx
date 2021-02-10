import React from "react";
import "./Footer.css";

import { MDBContainer, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter className="pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}
          <span> | Niks Nilo, All Rights Reserved.</span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
