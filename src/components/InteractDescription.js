import React from "react";
import "../styles/InteractDescription.scss";

const InteractDescription = ({ content }) => {
  return (
    <section className="description-container">
      <p>{content}</p>
    </section>
  );
};

export default InteractDescription;
