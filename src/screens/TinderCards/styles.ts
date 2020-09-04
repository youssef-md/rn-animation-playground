import styled from 'styled-components/native';

import { deviceWidth, deviceHeight } from '../../constants';

export const CARD_WIDTH = deviceWidth * 0.9;
export const CARD_HEIGHT = deviceHeight * 0.7;

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
  align-items: center;
`;

export const Card = styled.View`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
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

export const Like = styled.View`
  position: absolute;
  top: 60px;
  left: 20px;
  border-width: 5px;
  border-color: #6ad99e;
  padding: 0px 20px;
  border-radius: 10px;
  transform: rotate(-30deg);
  z-index: 2;
`;

export const LikeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: #6ad99e;
  letter-spacing: 3px;
`;

export const Nope = styled.View`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 2;
  border-width: 5px;
  border-color: #f57676;
  padding: 0px 20px;
  border-radius: 10px;
  transform: rotate(30deg);
`;

export const NopeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f57676;
  letter-spacing: 3px;
`;
