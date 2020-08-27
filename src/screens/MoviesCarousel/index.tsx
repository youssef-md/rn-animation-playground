// Inspiration: https://dribbble.com/shots/8257559-Movie-2-0

import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Container } from './styles';
import { movies } from './data';
import Item from './Item';

const MoviesCarousel: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={({ title }) => title}
        renderItem={({ index, item }) => <Item {...item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default MoviesCarousel;
