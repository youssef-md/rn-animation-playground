import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

interface CircleProps {
  color: string;
}
export const Circle = styled.View<CircleProps>`
  width: 220px;
  height: 220px;
  border-radius: 300px;
  position: absolute;
  top: 64px;
  background: ${(props) => props.color};
`;
