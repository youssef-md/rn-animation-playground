import React from 'react';

import { avatars, places } from '../data';

import {
  Container,
  Footer,
  Users,
  User,
  UsersInfo,
  UsersInfoTitle,
  PlaceInfo,
  PlaceInfoTitle,
  PlaceInfoValue,
} from './styles';

const selectedPlace = places[0];

const PlacesDetailScreen: React.FC = () => {
  return (
    <Container>
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
          <PlaceInfoValue>{selectedPlace.duration}</PlaceInfoValue>
        </PlaceInfo>

        <PlaceInfo>
          <PlaceInfoTitle>Rating</PlaceInfoTitle>
          <PlaceInfoValue>{selectedPlace.rating}</PlaceInfoValue>
        </PlaceInfo>
      </Footer>
    </Container>
  );
};

export default PlacesDetailScreen;
