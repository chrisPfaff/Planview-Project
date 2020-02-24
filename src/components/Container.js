//import dependencies
import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
//utility functions
import hashTabs from "../utils/hashTabs.js";
import sideBarCreator from "../utils/sideBarCreator.js";

//components
import TrackTab from "./TrackTab.js";
import TrackContainer from "./TrackContainer.js";
import SideBar from "./SideBar.js";
import SideBarChild from "./SideBarChild.js";
import InteractDescription from "./InteractDescription.js";

//styles
import "../styles/Container.scss";

const Container = () => {
  // Hook to store tabData on first fetch
  const [tabData, setTabData] = useState([]);

  // Hook to store complete payload so only need for one fetch
  const [payload, setPayload] = useState([]);

  // Hook to store data that will populate the sidebar
  const [sideBarData, setSideBarData] = useState([]);

  // Hook that changes state every time you click on a sidebar tab
  const [description, setDescription] = useState("");

  //Fetch data at render and populate tabs with Track.Descriptions
  useEffect(() => {
    fetch("http://localhost:3000/api").then(query => {
      query.json().then(data => {
        const items = data.Items;
        const tabs = hashTabs(items);
        setPayload(items);
        setTabData(tabs.sort());
      });
    });
  }, []);

  //click event to populate aside items
  const setAsideClick = e => {
    e.preventDefault();
    setDescription("");
    const tabName = e.target.id;
    // sideBarCreator searches for filters out an array
    // of elements that match which tab was clicked
    const sideBarContent = sideBarCreator(tabName, payload);

    //hook function to set an array for sideBar to populate
    setSideBarData(sideBarContent);
  };

  // click event that sets description in main body
  const setDescriptionClick = e => {
    e.preventDefault();
    const descriptionId = e.target.id;

    //hook function that will grab description from array that was
    //set when tab was chosen
    setDescription(sideBarData[descriptionId].Description);
  };

  // renderTab function that grabs data from state
  const renderTabs = tabData.map((item, index, arr) => {
    return <TrackTab id={item} title={item} click={setAsideClick} />;
  });

  // renders sidebar with whatever tab you clicked
  const renderAside = sideBarData.map((item, index, arr) => {
    return (
      <SideBarChild
        id={item.Track.Title}
        title={item.Title}
        click={setDescriptionClick}
      />
    );
  });

  return (
    <main className="container">
      <TrackContainer tab={renderTabs} />
      <div className="container-data">
        {/* use conditional rending to check if state has been populated */}
        {sideBarData.length > 0 && (
          <SideBar title={sideBarData[0].Track.Title} list={renderAside} />
        )}
        {/* use conditional rending to check if state has been populated */}
        {description.length > 0 && (
          <InteractDescription content={description} />
        )}
      </div>
    </main>
  );
};

export default Container;
