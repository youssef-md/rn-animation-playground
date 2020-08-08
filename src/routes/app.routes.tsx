import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";
import AnimatedLayout from "../screens/AnimatedLayout";
import Header from "../components/Header";

interface AppRoutesProps {
  switchTheme: () => void;
}

const App = createStackNavigator();

const AppRoutes: React.FC<AppRoutesProps> = ({ switchTheme }) => {
  return (
    <App.Navigator
      screenOptions={{
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
