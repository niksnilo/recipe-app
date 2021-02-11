import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavbarBrand, MDBIcon } from "mdbreact";
import "./Nav.css";
import Logo from "../Logo.png";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <BrowserRouter>
      <MDBNav className={navbar ? "nav active" : "nav"} expand="md">
        <MDBNavbarBrand>
          <h2>
            <strong>
              {/* <MDBIcon icon="utensils" className="mr-3" /> */}
              <img src={Logo} className="logo" />
              Recipe App
            </strong>
          </h2>
        </MDBNavbarBrand>
      </MDBNav>
    </BrowserRouter>
  );
}

export default Nav;
