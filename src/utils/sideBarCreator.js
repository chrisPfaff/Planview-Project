const sideBarCreator = (tabName, payLoad) => {
  return payLoad.filter(item => {
    if (item.Track.Description === tabName) {
      return item;
    }
  });
};

export default sideBarCreator;
