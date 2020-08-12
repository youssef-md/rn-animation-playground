import React, { useState, useCallback } from "react";
import Animated, {
  interpolate,
  Extrapolate,
  Easing,
} from "react-native-reanimated";
import { useTimingTransition, interpolateColor } from "react-native-redash";

import {
  Container,
  CurrentBackgroundColor,
  CircleButton,
  RightArrow,
  ArrowWrapper,
  AnimatedCircle,
} from "./styles";

const AnimatedOnboard: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const transition = useTimingTransition(pageIndex, {
    duration: 1200,
    easing: Easing.quad,
  });

  // const animation = interpolate(transition, {
  //   inputRange: [0, 1, 2, 3],
  //   outputRange: [0, -50, -100, -150],
  // });

  const updatePageIndex = useCallback(() => {
    // 0 -> 1 -> 2
    setPageIndex(pageIndex ^ 1);
    // setPageIndex(pageIndex ^ 1);
  }, [pageIndex]);

  return (
    <Container>
      <CurrentBackgroundColor
        as={Animated.View}
        style={{
          backgroundColor: interpolateColor(transition, {
            inputRange: [0, 0.5, 0.501, 1],
            outputRange: ["blue", "blue", "gray", "gray"],
          }),
        }}
      />
      <AnimatedCircle
        as={Animated.View}
        style={{
          transform: [
            { perspective: 300 },
            {
              rotateY: interpolate(transition, {
                inputRange: [0, 0.5, 1],
                outputRange: [0, -1.57, -3.14],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
            {
              scale: interpolate(transition, {
                inputRange: [0, 0.5, 1],
                outputRange: [1, 6, 1],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
            {
              translateX: interpolate(transition, {
                inputRange: [0, 0.5, 1],
                outputRange: [0, 20, 0],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
          zIndex: interpolate(transition, {
            inputRange: [0, 0.001, 0.5, 0.501, 1],
            outputRange: [0, 4, 4, 4, 0],
            extrapolate: Extrapolate.CLAMP,
          }),
          backgroundColor: interpolateColor(transition, {
            inputRange: [0, 0.5, 0.501, 1],
            outputRange: ["gray", "gray", "blue", "blue"],
          }),
        }}
      >
        <CircleButton onPress={updatePageIndex} />
      </AnimatedCircle>

      <ArrowWrapper
        as={Animated.View}
        pointerEvents="none"
        style={{
          opacity: interpolate(transition, {
            inputRange: [0, 0.001, 0.5, 0.501, 1],
            outputRange: [1, 0, 0, 0, 1],
          }),
        }}
      >
        <RightArrow name="chevron-right" size={32} />
      </ArrowWrapper>
    </Container>
  );
};

export default AnimatedOnboard;
