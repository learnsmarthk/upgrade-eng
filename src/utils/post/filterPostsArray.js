const convertValueToBoolean = (dataArray) => {
  return dataArray.map((item) => {
    if (item.isPublic === "TRUE") {
      return { ...item, isPublic: true };
    } else {
      return { ...item, isPublic: false };
    }
  });
};

export const filterPostArray = (dataArray) => {
  let newDataArray = dataArray;

  // Remove empty input
  newDataArray = newDataArray.filter((item) => {
    if (!item.question || !item.isPublic || item.question?.trim() === "") {
      return;
    } else {
      return item;
    }
  });

  // Convert isPublic string value to boolean
  newDataArray = convertValueToBoolean(newDataArray);

  return newDataArray;
};
