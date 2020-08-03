import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import Home from "../screens/Home";
import { useGitHubLink } from "../hooks/githubLink";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { repoLink } = useGitHubLink();

  return (
    <App.Navigator
      screenOptions={{
        headerRight: () => (
          <Button onPress={() => alert(repoLink)} title="Github" />
        ),
        headerStyle: {
          // backgroundColor: "#424242",
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
