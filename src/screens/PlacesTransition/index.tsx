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
        if (
          ev.nativeEvent.state === State.END &&
          activeIndex !== places.length - 1
        ) {
          setActiveSlide(activeIndex + 1);
        }
      }}>
      <FlingGestureHandler
        key="DOWN"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END && activeIndex !== 0) {
            setActiveSlide(activeIndex - 1);
          }
        }}>
        <Container>
          {/* Select a Place Title */}

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
              const newStyle = [
                style,
                {
                  zIndex: places.length - index,
                  left: -ITEM_WIDTH / 2,
                  top: -ITEM_HEIGHT / 2 - 20,
                },
              ];

              return (
                <View index={index} style={newStyle} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item }) => {
              const { poster, name } = item;
              return (
                <PlaceContainer>
                  <TouchableOpacity>
                    <PlaceImage source={poster} resizeMode="cover" />
                    <PlaceName>{name}</PlaceName>
                  </TouchableOpacity>
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
