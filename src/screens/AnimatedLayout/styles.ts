import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-evenly;
  align-items: center;
  /* flex-direction: row; */
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
`;
