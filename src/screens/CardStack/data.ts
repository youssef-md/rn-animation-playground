import { ImageSourcePropType } from 'react-native';

export interface Place {
  name: string;
  source: ImageSourcePropType;
}

export const places: Place[] = [
  {
    name: 'Alert Kitten',
    source: require(''),
  },
  {
    name: 'Nerd Dog',
    source: require(''),
  },
  {
    name: 'Happy Dog',
    source: require(''),
  },
  {
    name: 'Serious Cat',
    source: require(''),
  },
  {
    name: 'Model Cat',
    source: require(''),
  },
  {
    name: 'Leaf Dog',
    source: require(''),
  },
];
