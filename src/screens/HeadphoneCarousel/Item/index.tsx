import React from 'react';
import { Animated } from 'react-native';

import { deviceWidth } from '../../../constants';

import {
  Container,
  ProductImage,
  ProductInfo,
  Heading,
  HeadingLine,
  HeadingText,
  Description,
} from './styles';

interface ItemProps {
  imageUri: string;
  heading: string;
  index: number;
  scrollX: Animated.Value;
}

const Item: React.FC<ItemProps> = ({ index, heading, imageUri, scrollX }) => {
  // prev item , curr item, next, item
  const inputRange = [
    (index - 1) * deviceWidth,
    index * deviceWidth,
    (index + 1) * deviceWidth,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <Container>
      <ProductImage
        as={Animated.Image}
        style={{ transform: [{ scale }] }}
        source={imageUri}
        resizeMode="contain"
      />
      <ProductInfo>
        <Heading>
          <HeadingLine />
          <HeadingText>{heading}</HeadingText>
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          condimentum metus eget velit tempor accumsan
        </Description>
      </ProductInfo>
    </Container>
  );
};

export default Item;
