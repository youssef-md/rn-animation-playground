import React, { useMemo } from 'react';
import { Animated } from 'react-native';

import {
  Container,
  MoviePoster,
  MovieTitle,
  Genres,
  Genre,
  Star,
  Stars,
} from './styles';

const Item: React.FC = ({ title, poster, rating, genres, style }) => {
  const stars = useMemo(() => {
    return [...Array(rating).fill('star'), ...Array(5 - rating).fill('staro')];
  }, [rating]);

  return (
    <Container as={Animated.View} style={style}>
      <MoviePoster source={poster} resizeMode="contain" />
      <MovieTitle>{title}</MovieTitle>
      <Genres>
        {genres.map((genre) => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </Genres>
      <Stars>
        {stars.map((type, index) => (
          <Star key={index} name={type} size={20} />
        ))}
      </Stars>
    </Container>
  );
};

export default Item;
