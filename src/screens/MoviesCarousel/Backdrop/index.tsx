import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, { Rect } from 'react-native-svg';
import { FlatList } from 'react-native-gesture-handler';

import { Movie } from '../data';
import { deviceWidth, deviceHeight } from '../../../constants';
import { ITEM_WIDTH } from '../Item/styles';

import { Container, Poster, BottomGradient } from './styles';

interface BackdropProps {
  movies: Movie[];
  scrollX: Animated.Value;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Backdrop: React.FC<BackdropProps> = ({ movies, scrollX }) => {
  return (
    <Container renderToHardwareTextureAndroid>
      <FlatList
        renderToHardwareTextureAndroid
        removeClippedSubviews={false}
        contentContainerStyle={{ width: deviceHeight, height: deviceHeight }}
        data={movies}
        keyExtractor={({ title }) => title}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-deviceWidth, 0],
          });

          return (
            <MaskedView
              style={{
                position: 'absolute',
                width: deviceWidth,
                height: deviceHeight,
              }}
              maskElement={
                <AnimatedSvg
                  width={deviceWidth}
                  height={deviceHeight}
                  viewBox={`0 0 ${deviceWidth} ${deviceHeight}`}
                  style={{
                    backgroundColor: 'transparent',
                    transform: [{ translateX }],
                  }}>
                  <Rect
                    x="0"
                    y="0"
                    width={deviceWidth}
                    height={deviceHeight}
                    fill="red"
                  />
                </AnimatedSvg>
              }>
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
