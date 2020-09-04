import React, { useState, useRef, useCallback, useMemo } from 'react';
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
  Like,
  LikeText,
  Nope,
  NopeText,
} from './styles';
import { movies } from './data';

const CARD_OUT_WIDTH = deviceWidth + CARD_WIDTH;
const ACTION_OFFSET = 90;

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
        const direction = Math.sign(dx);

        if (Math.abs(dx) > ACTION_OFFSET) {
          Animated.timing(swipe, {
            duration: 200,
            toValue: { x: direction * CARD_OUT_WIDTH, y: dy },
            useNativeDriver: true,
          }).start(transitionNext);
        } else {
          Animated.timing(swipe, {
            toValue: { x: 0, y: 0 },
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const transitionNext = useCallback(() => {
    setItems(function popTopItem(prevState) {
      return prevState.slice(1);
    });
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const rotate = swipe.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [`${20}deg`, '0deg', `${-20}deg`],
    extrapolate: 'clamp',
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [0, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const likeStyle = { opacity: likeOpacity };
  const nopeStyle = { opacity: nopeOpacity };

  const nextCardStyle = {
    transform: [
      {
        scale: swipe.x.interpolate({
          inputRange: [-100, 0, 100],
          outputRange: [1, 0.95, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const handleChoise = useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        duration: 500,
        toValue: direction * CARD_OUT_WIDTH,
        useNativeDriver: true,
      }).start(transitionNext);
    },
    [swipe.x, transitionNext],
  );

  return (
    <Container>
      {items
        .slice(0, 4)
        .reverse()
        .map(({ poster, title }, index) => {
          const isFirst = index === items.length - 1;

          const panHandlers = isFirst ? panResponder.panHandlers : {};
          const cardStyle = isFirst ? animatedCardStyle : undefined;

          return (
            <Card
              key={title}
              as={Animated.View}
              {...panHandlers}
              style={[cardStyle, !isFirst && nextCardStyle]}>
              {isFirst && (
                <>
                  <Like as={Animated.View} style={likeStyle}>
                    <LikeText>Like</LikeText>
                  </Like>
                  <Nope as={Animated.View} style={nopeStyle}>
                    <NopeText>Nope</NopeText>
                  </Nope>
                </>
              )}
              <CardImage source={poster} resizeMode="cover" />
            </Card>
          );
        })}
      <Footer>
        <RoundButton onPress={() => handleChoise(-1)}>
          <Entypo name="cross" size={45} color="#f57676" />
        </RoundButton>
        <RoundButton onPress={() => handleChoise(1)}>
          <AntDesign name="heart" size={30} color="#6ad99e" />
        </RoundButton>
      </Footer>
    </Container>
  );
};

export default TinderCards;
