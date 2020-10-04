import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { deviceHeight, deviceWidth } from '../../constants';

export const ITEM_WIDTH = deviceWidth * 0.9;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.5;

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
`;

export const PlaceContainer = styled.View`
  position: absolute;
  left: ${-ITEM_WIDTH / 2}px;
  top: ${-ITEM_HEIGHT / 2}px;
`;

export const PlaceImage = styled.Image`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  border-radius: 10px;
`;

export const PlaceName = styled.Text`
  position: absolute;
  bottom: 25px;
  left: 25px;
  font-size: 38px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.8)'],
})`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: ${deviceHeight * 0.3}px;
  border-radius: 10px;
`;
