import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  justify-content: flex-end;
  align-items: center;
  padding: 100px;
`;

export const CurrentBackgroundColor = styled.View`
  background: coral;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const AnimatedCircle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: red;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ArrowWrapper = styled.View`
  position: absolute;
  bottom: 124px;
  justify-content: center;
  align-items: center;
`;

export const RightArrow = styled(Entypo)`
  color: ${(props) => props.theme.fontColor};
`;
