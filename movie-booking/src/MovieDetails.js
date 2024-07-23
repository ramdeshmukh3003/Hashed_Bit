import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.css';

const movies = [
  { id: 1, title: 'Movie 1', description: 'Description for Movie 1' },
  { id: 2, title: 'Movie 2', description: 'Description for Movie 2' },
  { id: 3, title: 'Movie 3', description: 'Description for Movie 3' },
  // Add more movie objects here
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to="/book-seat" className="book-seat-button">
        Book Seat
      </Link>
    </div>
  );
}

export default MovieDetails;
