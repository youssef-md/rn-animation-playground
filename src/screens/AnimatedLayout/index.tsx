import React, { useState, useMemo, useRef } from "react";
import { ViewStyle } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import CardDummy from "../../components/CardDummy";
import { colors, deviceWidth } from "../../constants";
import FooterButtons from "../../components/FooterButtons/intex";

import { Container } from "./styles";

interface Layout {
  container: ViewStyle;
  child: ViewStyle;
}

const ColumnLayout: Layout = {
  container: {
    alignItems: "center",
  },
  child: {
    flex: 1,
    marginBottom: 14,
  },
};

const WrapLayout: Layout = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  child: {
    width: deviceWidth * 0.44,
    height: 120,
    margin: 6,
  },
};

export interface Option {
  text: string;
  onPress: () => void;
}

const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const AnimatedLayout: React.FC = () => {
  const transitionRef = useRef(null);
  const [currentLayout, setCurrentLayout] = useState(ColumnLayout);

  const options = useMemo<Option[]>(
    () => [
      {
        text: "Column",
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(ColumnLayout);
        },
      },
      {
        text: "Wrap",
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(WrapLayout);
        },
      },
    ],
    []
  );

  return (
    <>
      <Container
        as={Transitioning.View}
        ref={transitionRef}
        transition={transition}
        style={currentLayout?.container}
      >
        <CardDummy style={currentLayout?.child} color={colors[0]} />
        <CardDummy style={currentLayout?.child} color={colors[1]} />
        <CardDummy style={currentLayout?.child} color={colors[3]} />
      </Container>
      <FooterButtons options={options} />
    </>
  );
};

export default AnimatedLayout;
