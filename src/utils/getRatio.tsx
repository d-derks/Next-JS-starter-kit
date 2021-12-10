export const getRatioImage = (ratio: string, images) => {
  return images.ratios[JSON.stringify(ratio)];
};

export const getDimenstionsFromRatio = (ratio: string) => {
  switch (ratio) {
    case "1_1":
      return {
        width: "1",
        height: "1",
      };
    case "2_1":
      return {
        width: "2",
        height: "1",
      };
    case "16_9":
      return {
        width: "16",
        height: "9",
      };
    case "3_2":
      return {
        width: "3",
        height: "2",
      };
    default:
      return {
        width: "16",
        height: "9",
      };
  }
};
