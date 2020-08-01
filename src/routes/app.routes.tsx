import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="Home" component={Home}/>
  </App.Navigator>
)

export default AppRoutes;