import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, SectionTitle, IconWrapper } from "./styles";

interface SectionBoxProps {
  title: string;
  color: string;
  route: string;
  icon: React.ReactNode;
}

const SectionBox: React.FC<SectionBoxProps> = ({
  title,
  color,
  route,
  icon: Icon,
}) => {
  console.log(Icon);
  const navigation = useNavigation();

  return (
    <Container color={color} onPress={() => navigation.navigate(route)}>
      <IconWrapper>{Icon}</IconWrapper>
      <SectionTitle>{title}</SectionTitle>
    </Container>
  );
};

export default SectionBox;
