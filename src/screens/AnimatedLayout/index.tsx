import React from "react";

import CardDummy from "../../components/CardDummy";
import { colors } from "../../constants";

import { Container } from "./styles";

const AnimatedLayout: React.FC = () => {
  return (
    <Container>
      <CardDummy color={colors[0]} />
      <CardDummy color={colors[1]} />
      <CardDummy color={colors[3]} />
    </Container>
  );
};

export default AnimatedLayout;
