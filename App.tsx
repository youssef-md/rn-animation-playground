import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import AppProvider from "./src/hooks";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
