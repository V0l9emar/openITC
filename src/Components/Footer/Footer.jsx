import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";

function Footer() {
  return (
    <div className="block">
      <div className="Footer">
        <div className="Footer__logo">
          <img src={logo} className="Footer__logo" alt="logo" /> 
        </div>
        <div className="Footer__courses">courses</div>
        <div className="Footer__about">about</div>
        <div className="Footer__contact">contact</div>
      </div>
    </div>
  );
}

export default Footer;
