import React from 'react';

import { colors } from '../../constants';

import {
  Container,
  MenuButton,
  MenuIcon,
  Drawer,
  CloseButton,
  CloseIcon,
  DrawerLink,
} from './styles';

const drawerLinks = [
  'Get Started',
  'Features',
  'Tools',
  'Services',
  'Portfolio',
  'Careers',
  'Contact',
];

const CustomDrawer: React.FC = () => {
  return (
    <Container>
      <Drawer>
        <CloseButton activeOpacity={0.6}>
          <CloseIcon name="close" size={35} />
        </CloseButton>

        {drawerLinks.map((link, index) => (
          <DrawerLink color={colors[index]}>{link}</DrawerLink>
        ))}
      </Drawer>

      <MenuButton activeOpacity={0.6}>
        <MenuIcon name="menu" size={35} />
      </MenuButton>
    </Container>
  );
};

export default CustomDrawer;
