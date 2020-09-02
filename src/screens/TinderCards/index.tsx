import React, { useRef } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Animated, PanResponder, Text } from 'react-native';

import { Container, Card, CardImage, Footer, RoundButton } from './styles';
import { movies } from './data';

const TinderCards: React.FC = () => {
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: swipe.x, dy: swipe.y }], {
        useNativeDriver: false,
      }),
    }),
  ).current;

  const rotate = swipe.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['20deg', '0deg', '-20deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <Container>
      {movies
        .slice(0, 4)
        .reverse()
        .map(({ poster, title }, index) => {
          const isFirst = index === movies.length - 1;
          const isSecond = index === movies.length - 2;

          const panHandlers = isFirst ? panResponder.panHandlers : {};
          const cardStyle = isFirst ? animatedCardStyle : undefined;

          return (
            <Card as={Animated.View} {...panHandlers} style={cardStyle}>
              <CardImage source={poster} resizeMode="cover" />
            </Card>
          );
        })}
      <Footer>
        <RoundButton>
          <Entypo name="cross" size={45} color="#f57676" />
        </RoundButton>
        <RoundButton>
          <AntDesign name="heart" size={30} color="#6ad99e" />
        </RoundButton>
      </Footer>
    </Container>
  );
};

export default TinderCards;
