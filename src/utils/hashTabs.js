const hashTabs = data => {
  const hash = {};
  data.forEach(item => {
    if (hash[item.Track.Description] === undefined) {
      hash[item.Track.Description] = 1;
    } else {
      hash[item.Track.Description] += 1;
    }
  });
  return Object.keys(hash);
};

export default hashTabs;
