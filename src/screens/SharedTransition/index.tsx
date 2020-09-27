// Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

import { Container } from './styles';

const SharedTransition: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate('Shared Transition Detail')}>
        <Text>Detail Screen </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SharedTransition;
