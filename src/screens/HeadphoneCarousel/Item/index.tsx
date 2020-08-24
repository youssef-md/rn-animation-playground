import React from 'react';

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
  // scrollX: number;
}

const Item: React.FC<ItemProps> = ({
  index,
  heading,
  imageUri,
  // scrollX,
}) => {
  return (
    <Container>
      <ProductImage source={imageUri} resizeMode="contain" />
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
