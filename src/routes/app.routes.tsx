import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../screens/Home';
import AnimatedWallet from '../screens/AnimatedWallet';
import AnimatedAccordion from '../screens/AnimatedAccordion';
import HeadphoneCarousel from '../screens/HeadphoneCarousel';
import MoviesCarousel from '../screens/MoviesCarousel';
import TinderCards from '../screens/TinderCards';
import WebView from '../screens/WebView';
import PathMorphing from '../screens/PathMorphing';
import SharedTransition from '../screens/SharedTransition';
import DetailScreen from '../screens/SharedTransition/DetailScreen';

// Commented examples due to buggy behavior
// import SkewScroll from '../screens/SkewScroll';
// import ListPicker from '../screens/ListPicker';
// import DotInversion from '../screens/DotInversion';

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
      }}>
      <App.Screen name="Animation Playground" component={Home} />
      <App.Screen name="GitHub" component={WebView} />
      <App.Screen name="Animated Accordion" component={AnimatedAccordion} />
      <App.Screen name="Animated Wallet" component={AnimatedWallet} />
      <App.Screen name="Tinder Cards" component={TinderCards} />
      <App.Screen name="Headphone Carousel" component={HeadphoneCarousel} />
      <App.Screen name="Movies Carousel" component={MoviesCarousel} />
      <App.Screen name="Shared Transition" component={SharedTransition} />
      <App.Screen name="Shared Transition Detail" component={DetailScreen} />
      <App.Screen name="Path Morphing" component={PathMorphing} />

      {/* Buggy Behavior */}
      {/* <App.Screen name="Dot Inversion" component={DotInversion} /> */}
      {/* <App.Screen name="List Picker" component={ListPicker} /> */}
      {/* <App.Screen name="Skew Scroll" component={SkewScroll} /> */}
    </App.Navigator>
  );
};

export default AppRoutes;
