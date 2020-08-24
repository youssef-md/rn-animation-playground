import styled from 'styled-components/native';

import { deviceHeight } from '../../../constants';

export const Container = styled.View`
  position: absolute;
  bottom: ${deviceHeight * 0.08}px;
  right: 20px;
  flex-direction: row;
`;

interface CircleProps {
  color: string;
}
export const Circle = styled.View<CircleProps>`
  background: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-left: 12px;
`;
