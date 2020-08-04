import styled from "styled-components/native";

export const Touch = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.cardBackgroundColor};
  border-width: 1px;
  border-color: ${(props) => props.theme.detailColor};
`;
