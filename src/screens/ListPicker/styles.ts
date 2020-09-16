import styled from 'styled-components/native';

import { deviceHeight, deviceWidth } from '../../constants';

const accentColor = '#a894ff';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
`;

export const Heading = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${accentColor};
  width: 200px;
  line-height: 36px;
  letter-spacing: 1.5px;
  padding-top: 5px;
  position: absolute;
  top: ${deviceHeight * 0.1}px;
  left: ${deviceWidth * 0.05}px;
`;

export const Line = styled.View`
  width: 2px;
  height: ${deviceHeight * 0.3}px;
  background: ${accentColor};

  position: absolute;
  top: ${deviceHeight * 0.3}px;
  left: ${deviceWidth * 0.06}px;
`;

export const FinishButton = styled.TouchableOpacity`
  background: ${accentColor};
  padding: 15px 40px;

  position: absolute;
  top: ${deviceHeight * 0.6}px;
  left: ${deviceWidth * 0.06}px;
`;

export const FinishButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.backgroundColor};
`;
