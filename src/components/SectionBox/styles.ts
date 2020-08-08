import styled from "styled-components/native";
import { transparentize } from "polished";

interface ContainerProps {
  color: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ContainerProps>`
  height: 185px;
  width: 48%;
  padding: 0 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background: ${(props) => transparentize(0.7, props.color)};
  border-width: 0.3px;
  border-color: ${(props) => props.color};
`;

export const IconWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SectionTitle = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
  color: ${(props) => props.theme.fontColor};
`;
