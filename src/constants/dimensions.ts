import { Dimensions } from "react-native";

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get(
  "window"
);

export const cardDummyWidth = deviceWidth * 0.89;
export const cardDummyHeight = 165;
