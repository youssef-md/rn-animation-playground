import styled from "styled-components/native";

export const Container = styled.View`
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
`;
