import React from "react";
import Logo from "./Logo.js";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img
          className="header-top-logo"
          src="https://d1ru3055gppavs.cloudfront.net/img/logo-planview-full-color.svg"
          alt="Planview Incorporated"
        />
      </div>
      <div className="header-logo-container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
