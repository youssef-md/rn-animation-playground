import React from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  Feather,
  Octicons,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import { colors } from './colors';

const defaultIconStyle = { size: 32 };

export const sections = [
  {
    title: 'Animated Layout',
    color: colors[0],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/AnimatedLayout/index.tsx',
    icon: <Feather color={colors[0]} name="layout" {...defaultIconStyle} />,
  },
  {
    title: 'Animated Accordion',
    color: colors[4],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/AnimatedAccordion/index.tsx',
    icon: <Entypo color={colors[4]} name="list" {...defaultIconStyle} />,
  },
  {
    title: 'Skew Scroll',
    color: colors[1],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/SkewScroll/index.tsx',
    icon: (
      <MaterialCommunityIcons
        color={colors[1]}
        name="skew-more"
        {...defaultIconStyle}
      />
    ),
  },
  {
    title: 'Animated Wallet',
    color: colors[2],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/AnimatedWallet/index.tsx',
    icon: (
      <MaterialCommunityIcons
        color={colors[2]}
        name="wallet-outline"
        {...defaultIconStyle}
      />
    ),
  },
  {
    title: 'Dot Inversion',
    color: colors[3],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/DotInversion/index.tsx',
    icon: (
      <Octicons color={colors[3]} name="primitive-dot" {...defaultIconStyle} />
    ),
  },

  {
    title: 'Tinder Cards',
    color: colors[5],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/TinderCards/index.tsx',
    icon: (
      <SimpleLineIcons color={colors[5]} name="fire" {...defaultIconStyle} />
    ),
  },
  {
    title: 'Headphone Carousel',
    color: colors[6],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/HeadphoneCarousel/index.tsx',
    icon: (
      <Ionicons color={colors[6]} name="md-headset" {...defaultIconStyle} />
    ),
  },
  {
    title: 'Movies Carousel',
    color: colors[7],
    githubLink:
      'https://github.com/youssef-md/rn-animation-playground/blob/master/src/screens/MoviesCarousel/index.tsx',
    icon: (
      <MaterialCommunityIcons
        color={colors[7]}
        name="movie-open-outline"
        {...defaultIconStyle}
      />
    ),
  },
];
