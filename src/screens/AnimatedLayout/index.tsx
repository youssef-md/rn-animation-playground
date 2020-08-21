import React, { useState, useMemo, useRef } from 'react';
import { ViewStyle, ImageStyle } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

import Card, {
  cards,
  CARD_ASPECT_RATIO,
  CARD_HEIGHT,
} from '../../components/Card';
import { deviceWidth, deviceHeight } from '../../constants';
import FooterButtons, { Option } from '../../components/FooterButtons';

import { Container } from './styles';

interface Layout {
  container: ViewStyle;
  child: ImageStyle;
}

const ColumnLayout: Layout = {
  container: {
    alignItems: 'center',
  },
  child: {
    marginBottom: 14,
  },
};

const WrapLayout: Layout = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  child: {
    width: deviceWidth * 0.44,
    height: (deviceWidth * 0.44) / CARD_ASPECT_RATIO,
    margin: 6,
  },
};

const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const AnimatedLayout: React.FC = () => {
  const transitionRef = useRef(null);
  const [currentLayout, setCurrentLayout] = useState(ColumnLayout);

  const options = useMemo<Option[]>(
    () => [
      {
        text: 'Column',
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(ColumnLayout);
        },
      },
      {
        text: 'Wrap',
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(WrapLayout);
        },
      },
    ],
    [],
  );

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: deviceHeight + CARD_HEIGHT - 20,
        }}>
        <Container
          as={Transitioning.View}
          ref={transitionRef}
          transition={transition}
          style={currentLayout?.container}>
          <Card style={currentLayout?.child} card={cards[0]} />
          <Card style={currentLayout?.child} card={cards[1]} />
          <Card style={currentLayout?.child} card={cards[2]} />
          <Card style={currentLayout?.child} card={cards[3]} />
        </Container>
      </ScrollView>
      <FooterButtons options={options} />
    </>
  );
};

export default AnimatedLayout;
