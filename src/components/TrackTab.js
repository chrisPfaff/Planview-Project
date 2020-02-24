import React from "react";
import "../styles/TrackTab.scss";

const TrackTab = ({ id, click, title }) => {
  return (
    <button id={id} onClick={click} className="track">
      {title}
    </button>
  );
};

export default TrackTab;
