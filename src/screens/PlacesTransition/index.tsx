// Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList, View } from 'react-native';

import {
  Container,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  PlaceContainer,
  PlaceImage,
  PlaceName,
} from './styles';
import { places } from './data';

// navigation.navigate('Shared Transition Detail')

const SharedTransition: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      {/* Select a Place Title */}

      <FlatList
        data={places}
        keyExtractor={({ title }) => title}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        CellRendererComponent={({ index, item, children, style, ...props }) => {
          const newStyle = [
            style,
            {
              zIndex: places.length - index,
              left: -ITEM_WIDTH / 2,
              top: -ITEM_HEIGHT / 2 - 20,
            },
          ];

          return (
            <View index={index} style={newStyle} {...props}>
              {children}
            </View>
          );
        }}
        renderItem={({ item }) => {
          const { poster, name } = item;
          return (
            <PlaceContainer>
              <TouchableOpacity>
                <PlaceImage source={poster} resizeMode="cover" />
                <PlaceName>{name}</PlaceName>
              </TouchableOpacity>
            </PlaceContainer>
          );
        }}
      />
    </Container>
  );
};

export default SharedTransition;
