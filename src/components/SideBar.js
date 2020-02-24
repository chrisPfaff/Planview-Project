import React from "react";
import "../styles/Sidebar.scss";

const SideBar = ({ title, list }) => {
  return (
    <div>
      <h2 className="sidebar-title">{title}</h2>
      <section className="sidebar-container">{list}</section>
    </div>
  );
};

export default SideBar;
