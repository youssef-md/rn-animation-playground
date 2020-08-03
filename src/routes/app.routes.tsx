import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import Home from "../screens/Home";
import { useGitHubLink } from "../hooks/githubLink";
import RoundButton from "../components/RoundButton";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { repoLink } = useGitHubLink();

  return (
    <App.Navigator
      screenOptions={{
        headerRight: () => (
          <View
            style={{
              width: 110,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <RoundButton onPress={() => alert(repoLink)} icon="logo-github" />
            <RoundButton onPress={() => alert(repoLink)} icon="ios-moon" />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#f0f0f0",
          elevation: 0,
          borderColor: "#424242",
          height: 90,
          width: 10,
          borderBottomWidth: 2,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 23,
        },
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

export default AppRoutes;
