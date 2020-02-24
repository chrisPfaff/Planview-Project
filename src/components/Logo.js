import React from "react";
import "../styles/Logo.scss";

const Logo = () => {
  return (
    <h1>
      <img
        className="logo"
        src="https://d1ru3055gppavs.cloudfront.net/img/logo-planview-full-color.svg"
        alt="Planview incorporated"
      />
      <br />
      <span className="logo-text">Video Archive</span>
    </h1>
  );
};

export default Logo;
