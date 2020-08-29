import styled from 'styled-components/native';

import { ITEM_WIDTH } from './Item/styles';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.cardBackgroundColor};
`;

export const CTAButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background: #323232;
  width: ${ITEM_WIDTH}px;
  align-self: center;
  position: absolute;
  bottom: 25px;
  padding: 18px 0;
  border-radius: 4px;
`;

export const CTAText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: #fafafa;
  letter-spacing: 0.5px;
`;
