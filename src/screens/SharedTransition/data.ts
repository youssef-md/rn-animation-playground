export interface Movie {
  title: string;
  poster: string;
  rating: string;
  genres: string[];
  duration: string;
}

export const avatars = [
  require('../../../assets/random1.jpg'),
  require('../../../assets/random2.jpg'),
  require('../../../assets/random3.jpg'),
  require('../../../assets/random4.jpg'),
  require('../../../assets/random5.jpg'),
];

export const movies: Movie[] = [
  {
    title: 'Black Panther',
    poster: require('../../../assets/poster-blackpanther.jpg'),
    rating: '5.0',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    duration: '2h 15m',
  },
  {
    title: 'Interstellar',
    poster: require('../../../assets/poster-interstellar.jpg'),
    rating: '5.0',
    genres: ['Drama', 'Suspense', 'Sci-Fi'],
    duration: '2h 49m',
  },
  {
    title: 'Joker',
    poster: require('../../../assets/poster-joker.jpg'),
    rating: '4.0',
    genres: ['Crime', 'Drama', 'Thriller'],
    duration: '2h 2m',
  },
  {
    title: 'Avengers End Game',
    poster: require('../../../assets/poster-endgame.jpg'),
    rating: '5.0',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    duration: '3h 2m',
  },
];
