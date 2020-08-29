interface Movie {
  title: string;
  poster: string;
  rating: number;
  genres: string[];
}

export const movies: Movie[] = [
  {
    title: 'Avengers End Game',
    poster: require('../../../assets/poster-endgame.jpg'),
    rating: 5,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    title: 'Joker',
    poster: require('../../../assets/poster-joker.jpg'),
    rating: 4,
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'Interstellar',
    poster: require('../../../assets/interstellar.jpg'),
    rating: 5,
    genres: ['Adventure', 'Sci-Fi', 'Thriller'],
  },
];
