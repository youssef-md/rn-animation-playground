// Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList, View, Animated } from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';

import {
  Container,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  PlaceContainer,
  PlaceImage,
  PlaceName,
} from './styles';
import { places } from './data';

// navigation.navigate('Shared Transition Detail')
const VISIBLE_ITEMS = 4;

const SharedTransition: React.FC = () => {
  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactiveAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactiveAnimated,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, reactiveAnimated]);

  const setActiveSlide = useCallback(
    (newIndex) => {
      setActiveIndex(newIndex);
      reactiveAnimated.setValue(newIndex);
    },
    [reactiveAnimated],
  );

  return (
    <FlingGestureHandler
      key="UP"
      direction={Directions.UP}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END && activeIndex !== 0) {
          setActiveSlide(activeIndex - 1);
        }
      }}>
      <FlingGestureHandler
        key="DOWN"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (
            ev.nativeEvent.state === State.END &&
            activeIndex < places.length - 1
          ) {
            setActiveSlide(activeIndex + 1);
          }
        }}>
        <Container>
          <FlatList
            data={places}
            keyExtractor={({ name }) => name}
            scrollEnabled={false}
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            CellRendererComponent={({
              index,
              item,
              children,
              style,
              ...props
            }) => {
              return <View style={style}>{children}</View>;
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];

              const translateY = animatedValue.interpolate({
                inputRange,
                outputRange: [-38, 0, 38],
              });

              const opacity = animatedValue.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              const scale = animatedValue.interpolate({
                inputRange,
                outputRange: [0.92, 1, 1.2],
              });

              const { poster, name } = item;
              return (
                <PlaceContainer
                  as={Animated.View}
                  style={{
                    transform: [{ translateY }, { scale }],
                    opacity,
                    elevation: places.length - index,
                    zIndex: places.length - index,
                  }}>
                  <PlaceImage source={poster} resizeMode="cover" />
                  <PlaceName>{name}</PlaceName>
                </PlaceContainer>
              );
            }}
          />
        </Container>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default SharedTransition;
