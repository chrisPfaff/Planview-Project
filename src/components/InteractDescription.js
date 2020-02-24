import React from "react";
import "../styles/InteractDescription.scss";

//renders description container with text inside
const InteractDescription = ({ content }) => {
  return (
    <section className="description-container">
      <p>{content}</p>
    </section>
  );
};

export default InteractDescription;
