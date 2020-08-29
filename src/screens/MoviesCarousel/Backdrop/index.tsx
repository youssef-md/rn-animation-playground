import React from 'react';
import { Animated, FlatList } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, { Rect } from 'react-native-svg';

import { Movie } from '../data';

import { Container, Poster, BottomGradient } from './styles';

interface BackdropProps {
  movies: Movie[];
  scrollX: Animated.Value;
}

const Backdrop: React.FC<BackdropProps> = ({ movies, scrollX }) => {
  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={({ title }) => title}
        renderItem={({ index, item }) => {
          return (
            <MaskedView>
              <Poster source={item.poster} resizeMode="cover" />
            </MaskedView>
          );
        }}
      />

      <BottomGradient />
    </Container>
  );
};

export default Backdrop;
