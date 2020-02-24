import React from "react";
import "../styles/TrackContainer.scss";

//Creates a navbar of tabs for Track div, uses implicit return
const TrackContainer = ({ tab }) => (
  <nav className="track-container">{tab}</nav>
);

export default TrackContainer;
