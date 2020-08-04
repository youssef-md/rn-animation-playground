import React, { useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useTheme } from "styled-components";

import Home from "../screens/Home";
import { useGitHubLink } from "../hooks/githubLink";
import RoundButton from "../components/RoundButton";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { repoLink } = useGitHubLink();
  const { backgroundColor, detailColor, fontColor } = useTheme();

  const headerStyle = {
    backgroundColor,
    elevation: 0,
    height: 100,
    borderBottomColor: detailColor,
    borderBottomWidth: 1,
  };

  const headerTitleStyle = useMemo(
    () => ({
      fontWeight: "bold",
      fontSize: 23,
    }),
    []
  );

  return (
    <App.Navigator
      screenOptions={{
        headerRight: () => (
          <View
            style={{
              width: 115,
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 15,
            }}
          >
            <RoundButton onPress={() => alert(repoLink)} icon="logo-github" />
            <RoundButton onPress={() => {}} icon="ios-moon" />
          </View>
        ),
        headerStyle,
        headerTintColor: fontColor,
        headerTitleStyle,
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

export default AppRoutes;
