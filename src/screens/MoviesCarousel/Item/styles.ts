import styled from 'styled-components/native';
import { transparentize } from 'polished';
import { AntDesign } from '@expo/vector-icons';

import { deviceWidth } from '../../../constants';

export const Container = styled.View`
  background: ${(props) => props.theme.cardBackgroundColor};
  align-self: flex-end;
  margin: 0 20px;
  padding: 35px 0 20px 0px;
  elevation: 1;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  align-items: center;
  justify-content: flex-start;
  width: ${deviceWidth * 0.75}px;
`;

export const MoviePoster = styled.Image`
  height: 320px;
  border-radius: 35px;
`;

export const MovieTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 14px 0;
  letter-spacing: -0.5px;
`;

export const Genres = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Genre = styled.Text`
  font-size: 12px;
  padding: 4px 12px;
  color: ${(props) => transparentize(0.5, props.theme.fontColor)};
  border-radius: 20px;
  border: 1px;
  border-color: ${(props) => transparentize(0.5, props.theme.fontColor)};
  margin: 0 4px;
`;

export const Stars = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Star = styled(AntDesign)`
  color: #d4af37;
  margin: 0 2px;
`;
