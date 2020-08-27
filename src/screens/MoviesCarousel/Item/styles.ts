import styled from 'styled-components/native';

import { deviceWidth } from '../../../constants';

export const Container = styled.View`
  background: ${(props) => props.theme.cardBackgroundColor};
  align-self: flex-end;
  margin: 0 20px;
  padding: 30px 35px 0 35px;
  elevation: 3;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  align-items: center;
  justify-content: flex-start;
  width: ${deviceWidth * 0.8}px;
`;

export const MoviePoster = styled.Image`
  height: 320px;
  border-radius: 40px;
`;

export const MovieTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 12px 0;
`;
