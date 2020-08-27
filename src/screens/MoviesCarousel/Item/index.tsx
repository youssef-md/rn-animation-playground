import React from 'react';
import { Text } from 'react-native';

import { Container, MoviePoster, MovieTitle } from './styles';

const Item: React.FC = ({ title, poster, rating, genres }) => {
  return (
    <Container>
      <MoviePoster source={poster} resizeMode="contain" />
      <MovieTitle>{title}</MovieTitle>
      <Text>Genres</Text>
      <Text>Rating</Text>
    </Container>
  );
};

export default Item;
