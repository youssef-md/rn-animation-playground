// Inspiration: https://dribbble.com/shots/3431451-HUNGRY

import React from 'react';

import {
  Container,
  Heading,
  Line,
  FinishButton,
  FinishButtonText,
} from './styles';

const ListPicker: React.FC = () => {
  return (
    <Container>
      <Heading>Connect with...</Heading>

      <Line />

      <FinishButton activeOpacity={0.8}>
        <FinishButtonText>Done !</FinishButtonText>
      </FinishButton>
    </Container>
  );
};

export default ListPicker;
