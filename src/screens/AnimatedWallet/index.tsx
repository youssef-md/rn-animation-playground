import React, { useState } from "react";
import Animated, { interpolate, multiply } from "react-native-reanimated";
import { useSpringTransition } from "react-native-redash";

import Card, { cards } from "../../components/Card";
import FooterButtons from "../../components/FooterButtons";
import { deviceWidth } from "../../constants";

const walletFront = {
  id: Math.random(),
  source: require("../../../assets/wallet-front.png"),
};

const walletBack = {
  id: Math.random(),
  source: require("../../../assets/wallet-back.png"),
};

import { Container, AbsoluteAnimatedView } from "./styles";
const wallet = [walletBack, cards[0], cards[3], walletFront];

const transformOrigin = -1 * (deviceWidth / 2);

const AnimatedWallet: React.FC = () => {
  const [toggled, setToggled] = useState(0);
  const transition = useSpringTransition(toggled);

  return (
    <>
      <Container>
        {wallet.map((card, index) => {
          const direction = interpolate(index, {
            inputRange: [0, 1, 2],
            outputRange: [1, 0, -1],
          });

          const rotate = multiply(
            direction,
            interpolate(transition, {
              inputRange: [0, 1],
              outputRange: [0, Math.PI / 14],
            })
          );

          return (
            <AbsoluteAnimatedView
              as={Animated.View}
              style={{
                transform: [
                  { translateX: transformOrigin },
                  { rotate },
                  { translateX: -transformOrigin },
                ],
              }}
            >
              <Card key={card.id} card={card} />
            </AbsoluteAnimatedView>
          );
        })}
      </Container>
      <FooterButtons
        options={[
          {
            text: toggled ? "Close" : "Open",
            onPress: () => setToggled(toggled ^ 1),
          },
        ]}
      />
    </>
  );
};

export default AnimatedWallet;
