import React from "react";
import { StyleProp, ViewProps } from "react-native";
import { transparentize, adjustHue } from "polished";

import { Gradient, Text, Circle1, Circle2, Circle3, Circle4 } from "./styles";

interface CardDummyProps {
  color: string;
  text?: string;
  style?: StyleProp<ViewProps>;
}

const CardDummy: React.FC<CardDummyProps> = ({ color, style, text }) => {
  const colorFrom = transparentize(0.3, color);
  const colorTo = transparentize(0.3, adjustHue(-60, color));

  return (
    <Gradient
      colors={[colorFrom, colorTo]}
      start={[0, 1]}
      end={[1, 0]}
      color={color}
      style={style}
    >
      <Text>{text}</Text>
      <Circle1 style={{ borderColor: colorTo }} />
      <Circle2 style={{ borderColor: colorFrom }} />
      <Circle3 style={{ borderColor: colorTo }} />
      <Circle4 style={{ borderColor: colorFrom }} />
    </Gradient>
  );
};

export default CardDummy;
