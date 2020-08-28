import React, { useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  MoviePoster,
  MovieTitle,
  Genres,
  Genre,
  Star,
  Stars,
  Rating,
} from './styles';

const Item: React.FC = ({ title, poster, rating, genres }) => {
  const stars = useMemo(() => {
    return [...Array(rating).fill('star'), ...Array(5 - rating).fill('staro')];
  }, [rating]);

  return (
    <Container>
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
