import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import Routes from "./src/routes";
import AppProvider from "./src/hooks";
import { dark, light } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
