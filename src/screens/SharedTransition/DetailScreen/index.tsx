import React from 'react';

import { avatars, movies } from '../data';

import {
  Container,
  Footer,
  Users,
  User,
  UsersInfo,
  UsersInfoTitle,
  MovieInfo,
  MovieInfoTitle,
  MovieInfoValue,
} from './styles';

const selectedMovie = movies[0];

const DetailScreen: React.FC = () => {
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

        <MovieInfo>
          <MovieInfoTitle>Duration</MovieInfoTitle>
          <MovieInfoValue>{selectedMovie.duration}</MovieInfoValue>
        </MovieInfo>

        <MovieInfo>
          <MovieInfoTitle>Rating</MovieInfoTitle>
          <MovieInfoValue>{selectedMovie.rating}</MovieInfoValue>
        </MovieInfo>
      </Footer>
    </Container>
  );
};

export default DetailScreen;
