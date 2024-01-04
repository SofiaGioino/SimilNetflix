import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ selectedGenre }) => {
  const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      },
      {
        id: 2,
        title: 'The Godfather',
        poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      },
      {
        id: 3,
        title: 'The Dark Knight',
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      },
      {
          id: 4,
          title: 'The Avengers',
          poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
          description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        },
      {
        id: 5,
        title: 'Forrest Gump',
        poster: 'https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg',  // Cambié la imagen de Forrest Gump
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
      },
      {
          id: 6,
          title: 'Interstellar',
          poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',  // Nueva imagen de Interstellar
          description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        },
        {
          id: 7,
          title: 'The Shawshank Redemption',
          poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
          description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        },
        {
          id: 8,
          title: 'The Godfather',
          poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        },
        {
          id: 9,
          title: 'The Dark Knight',
          poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
          description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        },
        {
            id:10,
            title: 'The Avengers',
            poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
            description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
          },
        {
          id: 11,
          title: 'Forrest Gump',
          poster: 'https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg',  // Cambié la imagen de Forrest Gump
          description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        },
        {
            id: 12,
            title: 'Interstellar',
            poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',  // Nueva imagen de Interstellar
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
          },
          {
        id: 13,
        title: 'The Shawshank Redemption',
        poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      },
      {
        id: 14,
        title: 'The Godfather',
        poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      },
      {
        id: 15,
        title: 'The Dark Knight',
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      },
  ];

  const filteredMovies =
    selectedGenre === 'All'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

