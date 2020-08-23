import styled from 'styled-components/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { darken } from 'polished';

export const Container = styled.View`
  background: ${(props) => props.theme.backgroundColor};
  flex: 1;
`;

export const MenuButton = styled.TouchableOpacity`
  position: absolute;
  top: 14px;
  right: 18px;
`;

export const MenuIcon = styled(MaterialCommunityIcons)`
  color: ${(props) => props.theme.fontColor};
`;

export const Drawer = styled.View`
  background: ${(props) => darken(0.05, props.theme.backgroundColor)};
  flex: 1;
  z-index: 4;
  padding: 18px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 14px;
  right: 18px;
  z-index: 4;
`;

export const CloseIcon = styled(AntDesign)`
  color: ${(props) => props.theme.fontColor};
`;

interface DrawerLinkProps {
  color: string;
}

export const DrawerLink = styled.Text<DrawerLinkProps>`
  color: ${(props) => props.color};
  font-size: 24px;
  margin: 6px 0;
  text-transform: uppercase;
`;
