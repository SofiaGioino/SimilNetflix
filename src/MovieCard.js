import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={movie.poster} alt={movie.title} />
      <div className="movie-card__overlay">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__description">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
