import React from "react";
import Logo from "../images/logo.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="Logo">
        <a>
          <img src={Logo}></img>
        </a>
      </div>
      <div className="options">
        <div className="Aboutus">
          <a>About</a>
        </div>
        <div className="contactus">
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
