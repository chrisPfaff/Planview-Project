import React from "react";
import "../styles/SideBarChild.scss";

//function which creates side bar child component
//populated with a click event that creates description
//and an id to find description
const SideBarChild = ({ id, click, title }) => (
  <button id={id} onClick={click} className="sidebar-child-component">
    {title}
  </button>
);

export default SideBarChild;
