import styled from 'styled-components/native';

import { deviceHeight } from '../../../constants';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundColor};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${deviceHeight * 0.25}px;
  background: #101010;
`;

export const Users = styled.View`
  flex-direction: row;
`;

export const UsersInfo = styled.View``;

export const UsersInfoTitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
`;

export const User = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 25px;
  border-width: 4px;
  border-color: #101010;
`;

export const PlaceInfo = styled.View``;

export const PlaceInfoTitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
`;

export const PlaceInfoValue = styled.Text`
  font-size: 32px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;
