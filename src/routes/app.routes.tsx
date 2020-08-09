import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";

import Header from "../components/Header";
import Home from "../screens/Home";
import AnimatedLayout from "../screens/AnimatedLayout";

interface AppRoutesProps {
  switchTheme: () => void;
}

const App = createStackNavigator();

const AppRoutes: React.FC<AppRoutesProps> = ({ switchTheme }) => {
  const { backgroundColor } = useTheme();

  return (
    <App.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor,
          flex: 1,
        },
        header: ({ scene, navigation }) => {
          return (
            <Header
              routeName={scene.route.name}
              switchTheme={switchTheme}
              goBack={navigation.goBack}
            />
          );
        },
      }}
    >
      <App.Screen name="Animation Playground" component={Home} />
      <App.Screen name="Animated Layout" component={AnimatedLayout} />
    </App.Navigator>
  );
};

export default AppRoutes;
