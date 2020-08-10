import React from "react";

import CardDummy from "../../components/CardDummy";
import { colors } from "../../constants";
import FooterButtons from "../../components/FooterButtons/intex";

import { Container } from "./styles";

export interface Option {
  text: string;
  onPress: () => void;
}

const AnimatedLayout: React.FC = () => {
  const options: Option[] = [
    { text: "Column", onPress: () => {} },
    { text: "Wrap", onPress: () => {} },
  ];

  return (
    <Container>
      <CardDummy color={colors[0]} />
      <CardDummy color={colors[1]} />
      <CardDummy color={colors[3]} />
      <FooterButtons options={options} />
    </Container>
  );
};

export default AnimatedLayout;
