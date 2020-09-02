import styled from 'styled-components/native';

import { deviceWidth, deviceHeight } from '../../constants';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  align-items: center;
`;

export const Card = styled.View`
  width: ${deviceWidth * 0.9}px;
  height: ${deviceHeight * 0.7}px;
  border-radius: 8px;
  elevation: 6;
  position: absolute;
  top: 8px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Footer = styled.View`
  height: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 280px;
  position: absolute;
  bottom: 4px;
`;

export const RoundButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.65,
})`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  elevation: 2.2;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.cardBackgroundColor};
`;
