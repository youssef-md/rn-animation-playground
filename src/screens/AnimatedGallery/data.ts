import { ImageSourcePropType } from 'react-native';

interface Image {
  key: number;
  src: ImageSourcePropType;
}

export const images: Image[] = [
  {
    key: 1,
    src: require('../../../assets/pet1.png'),
  },
  {
    key: 2,
    src: require('../../../assets/pet2.png'),
  },
  {
    key: 3,
    src: require('../../../assets/pet3.png'),
  },
  {
    key: 4,
    src: require('../../../assets/pet4.png'),
  },
  {
    key: 5,
    src: require('../../../assets/pet5.png'),
  },
  {
    key: 6,
    src: require('../../../assets/pet6.png'),
  },
];
