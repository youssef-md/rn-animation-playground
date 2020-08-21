import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';
import { themes } from './styles';
import Routes from './routes';

export default function App() {
  const [theme, setTheme] = useState(themes.dark);

  const switchTheme = useCallback(() => {
    setTheme(theme.type === 'dark' ? themes.light : themes.dark);
  }, [theme.type]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes switchTheme={switchTheme} />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
