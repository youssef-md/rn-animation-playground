import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../screens/Home';
import AnimatedGallery from '../screens/AnimatedGallery';
import SkewScroll from '../screens/SkewScroll';
import AnimatedWallet from '../screens/AnimatedWallet';
import DotInversion from '../screens/DotInversion';
import AnimatedAccordion from '../screens/AnimatedAccordion';
import HeadphoneCarousel from '../screens/HeadphoneCarousel';
import MoviesCarousel from '../screens/MoviesCarousel';
import TinderCards from '../screens/TinderCards';
import WebView from '../screens/WebView';

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
      <App.Screen name="Animated Gallery" component={AnimatedGallery} />
      <App.Screen name="Animated Accordion" component={AnimatedAccordion} />
      <App.Screen name="Skew Scroll" component={SkewScroll} />
      <App.Screen name="Animated Wallet" component={AnimatedWallet} />
      <App.Screen name="Dot Inversion" component={DotInversion} />
      <App.Screen name="Tinder Cards" component={TinderCards} />
      <App.Screen name="Headphone Carousel" component={HeadphoneCarousel} />
      <App.Screen name="Movies Carousel" component={MoviesCarousel} />
    </App.Navigator>
  );
};

export default AppRoutes;
