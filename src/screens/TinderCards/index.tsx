import React, { useRef } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

import { Container, Card, CardImage, Footer, RoundButton } from './styles';
import { movies } from './data';

const TinderCards: React.FC = () => {
  const translate = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translate.x,
          translationY: translate.y,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {}

  return (
    <Container>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Card
          as={Animated.View}
          style={{
            transform: [
              { translateX: translate.x },
              { translateY: translate.y },
            ],
          }}>
          <CardImage source={movies[0].poster} resizeMode="cover" />
        </Card>
      </PanGestureHandler>
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
