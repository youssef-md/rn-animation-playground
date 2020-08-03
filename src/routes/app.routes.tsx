import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
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

export default AppRoutes;
