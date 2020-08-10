import React from "react";

import { Option } from "../../screens/AnimatedLayout";

import { Container, FooterButton, FooterButtonText, Separator } from "./styles";

interface FooterButtonsProps {
  options: Option[];
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ options }) => {
  return (
    <Container>
      {options.map(({ text, onPress }, index) => (
        <>
          <FooterButton onPress={onPress} key={text}>
            <FooterButtonText>{text}</FooterButtonText>
          </FooterButton>
          {index !== options.length - 1 && <Separator />}
        </>
      ))}
    </Container>
  );
};

export default FooterButtons;
