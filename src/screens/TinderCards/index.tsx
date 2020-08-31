import React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { Container, Card, CardImage, Footer, RoundButton } from './styles';
import { movies } from './data';

const TinderCards: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardImage source={movies[0].poster} resizeMode="cover" />
      </Card>
      <Footer>
        <RoundButton>
          <Entypo name="cross" size={45} color="#f57676" />
        </RoundButton>
        <RoundButton>
          <AntDesign name="heart" size={30} color="#6ad99e" />
        </RoundButton>
      </Footer>
    </Container>
  );
};

export default TinderCards;
