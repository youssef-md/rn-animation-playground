import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(StatusBar?.currentHeight ?? 24) + 10}px 12px 10px 12px;
  background: ${(props) => props.theme.backgroundColor};
  elevation: 1;
  border-bottom-color: ${(props) => props.theme.detailColor};
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
`;

export const RightItems = styled.View`
  flex-direction: row;
`;

export const BackArrowContainer = styled.View`
  margin-right: 12px;
`;

export const Separator = styled.View`
  width: 10px;
`;
