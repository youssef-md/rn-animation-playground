import React, { useState, useRef, useCallback } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Animated, PanResponder } from 'react-native';

import { deviceWidth } from '../../constants';

import {
  Container,
  Card,
  CardImage,
  Footer,
  RoundButton,
  CARD_WIDTH,
} from './styles';
import { movies } from './data';

const TinderCards: React.FC = () => {
  const swipe = useRef(new Animated.ValueXY()).current;
  const [items, setItems] = useState(movies);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: swipe.x, dy: swipe.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, { dx, dy }) => {
        const direction = dx >= 0 ? 1 : -1;

        if (Math.abs(dx) > 90) {
          Animated.timing(swipe, {
            duration: 200,
            toValue: { x: direction * (deviceWidth + CARD_WIDTH), y: dy },
            useNativeDriver: true,
          }).start(transitionNext);
        } else {
          Animated.spring(swipe, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const transitionNext = useCallback(() => {
    setItems(function popTopItem(prevState) {
      swipe.setValue({ x: 0, y: 0 });
      return prevState.slice(1);
    });
  }, [swipe]);

  const rotate = swipe.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['20deg', '0deg', '-20deg'],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <Container>
      {items
        .slice(0, 4)
        .reverse()
        .map(({ poster, title }, index) => {
          const isFirst = index === items.length - 1;

          const panHandlers = isFirst ? panResponder.panHandlers : {};
          const cardStyle = isFirst ? animatedCardStyle : undefined;
          const nextCardStyle = {
            transform: [
              {
                scale: swipe.x.interpolate({
                  inputRange: [-200, 0, 200],
                  outputRange: [1, 0.9, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          };

          return (
            <Card
              key={title}
              as={Animated.View}
              {...panHandlers}
              style={[cardStyle, !isFirst && nextCardStyle]}>
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
