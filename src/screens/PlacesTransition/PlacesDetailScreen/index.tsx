import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

import { avatars } from '../data';

import {
  Container,
  FullPlaceImage,
  PlaceName,
  Gradient,
  Footer,
  Users,
  User,
  UsersInfo,
  UsersInfoTitle,
  PlaceInfo,
  PlaceInfoTitle,
  PlaceInfoValue,
} from './styles';

const PlacesDetailScreen: React.FC = ({ route }) => {
  const {
    item: { name, poster, duration, rating },
  } = route.params;

  return (
    <Container>
      <SharedElement id={`item.${name}.image`}>
        <FullPlaceImage source={poster} resizeMode="cover" />
      </SharedElement>
      <Gradient />

      <PlaceName>{name}</PlaceName>

      <Footer>
        <UsersInfo>
          <UsersInfoTitle>Reviews</UsersInfoTitle>
          <Users>
            {avatars.map((avatar, index) => (
              <User
                style={{
                  zIndex: avatars.length - index,
                  marginLeft: index === 0 ? 0 : -20,
                }}
                source={avatar}
                key={avatar}
              />
            ))}
          </Users>
        </UsersInfo>

        <PlaceInfo>
          <PlaceInfoTitle>Duration</PlaceInfoTitle>
          <PlaceInfoValue>{duration}</PlaceInfoValue>
        </PlaceInfo>

        <PlaceInfo>
          <PlaceInfoTitle>Rating</PlaceInfoTitle>
          <PlaceInfoValue>{rating}</PlaceInfoValue>
        </PlaceInfo>
      </Footer>
    </Container>
  );
};

PlacesDetailScreen.sharedElements = (route, otherRoute, showing) => {
  const {
    item: { name },
  } = route.params;

  return [
    {
      id: `item.${name}.image`,
    },
    {
      id: `item.${name}.name`,
    },
  ];
};

export default PlacesDetailScreen;
