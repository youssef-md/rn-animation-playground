import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import AppRoutes from './app.routes';

interface RoutesProps {
  switchTheme: () => void;
}

const Routes: React.FC<RoutesProps> = ({ switchTheme }) => {
  const { type } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={type === 'dark' ? 'light' : 'dark'} />
      <AppRoutes switchTheme={switchTheme} />
    </>
  );
};

export default Routes;
