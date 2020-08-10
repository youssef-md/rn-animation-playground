import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { cardDummyWidth, cardDummyHeight } from "../../constants";

interface ContainerProps {
  color: string;
}

export const Gradient = styled(LinearGradient)<ContainerProps>`
  width: ${cardDummyWidth}px;
  height: ${cardDummyHeight}px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export const Circle1 = styled.View`
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 3px;
`;

export const Circle2 = styled.View`
  position: absolute;
  top: -20px;
  left: -110px;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  border-width: 50px;
  border-width: 60px;
  opacity: 0.3;
`;

export const Circle3 = styled.View`
  position: absolute;
  bottom: -60px;
  right: 0;
  width: 110px;
  height: 110px;
  border-radius: 300px;
  border-width: 30px;
`;

export const Circle4 = styled.View`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  border-radius: 300px;
  border-width: 30px;
  opacity: 0.5;
`;
