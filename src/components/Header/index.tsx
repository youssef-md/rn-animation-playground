import React from 'react';
import {useTheme} from 'styled-components';

import RoundButton from '../RoundButton';
import {useGitHubLink} from '../../hooks/githubLink';

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

const Header: React.FC<HeaderProps> = ({routeName, switchTheme, goBack}) => {
  const {type} = useTheme();
  const {repoLink} = useGitHubLink();

  return (
    <Container>
      {routeName !== 'Animation Playground' && (
        <BackArrowContainer>
          <RoundButton icon="md-arrow-round-back" onPress={goBack} />
        </BackArrowContainer>
      )}

      <HeaderTitle>{routeName}</HeaderTitle>
      <RightItems>
        <RoundButton
          icon={type === 'dark' ? 'ios-sunny' : 'ios-moon'}
          onPress={switchTheme}
        />
        <Separator />
        <RoundButton icon="logo-github" onPress={() => alert(repoLink)} />
      </RightItems>
    </Container>
  );
};

export default Header;
