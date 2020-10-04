import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import RoundButton from '../RoundButton';

import {
  Container,
  HeaderTitle,
  RightItems,
  BackArrowContainer,
  Separator,
} from './styles';

interface HeaderProps {
  routeName: string;
  switchTheme: () => void;
  goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ routeName, switchTheme, goBack }) => {
  const navigation = useNavigation();
  const { type } = useTheme();

  const isInSharedDetailScreen = routeName.includes('Detail');

  return (
    <Container hideBackground={isInSharedDetailScreen}>
      {routeName !== 'Animation Playground' && (
        <BackArrowContainer>
          <RoundButton icon="md-arrow-round-back" onPress={goBack} />
        </BackArrowContainer>
      )}

      {!isInSharedDetailScreen && (
        <>
          <HeaderTitle>{routeName}</HeaderTitle>
          <RightItems>
            <RoundButton
              icon={type === 'dark' ? 'ios-sunny' : 'ios-moon'}
              onPress={switchTheme}
            />
            <Separator />
            <RoundButton
              icon="logo-github"
              onPress={() => navigation.navigate('GitHub')}
            />
          </RightItems>
        </>
      )}
    </Container>
  );
};

export default Header;
