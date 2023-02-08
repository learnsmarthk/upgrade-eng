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
  newDataArray.filter((item) => item.question && item.isPublic);
  newDataArray = convertValueToBoolean(newDataArray);
  return newDataArray;
};
