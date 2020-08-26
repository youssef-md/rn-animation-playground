import styled from 'styled-components/native';

import { deviceHeight } from '../../../constants';

export const Container = styled.View`
  position: absolute;
  bottom: ${deviceHeight * 0.06}px;
  right: 20px;
  flex-direction: row;
`;

interface CircleProps {
  color: string;
}
export const Circle = styled.View<CircleProps>`
  background: ${(props) => props.color};
  width: 18px;
  height: 18px;
  border-radius: 10px;
  margin-left: 18px;
`;
