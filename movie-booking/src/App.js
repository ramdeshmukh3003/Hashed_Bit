import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const movies = [
  { id: 1, title: 'Movie 1', image: './images/image1.jpg' },
  { id: 2, title: 'Movie 2', image: './images/image2.jpeg' },
  { id: 3, title: 'Movie 3', image: './images/image3.jpg' },
  { id: 4, title: 'Movie 4', image: './images/image4.jpg' },
  { id: 1, title: 'Movie 1', image: './images/image1.jpg' },
  { id: 2, title: 'Movie 2', image: './images/image2.jpeg' },
  { id: 3, title: 'Movie 3', image: './images/image3.jpg' },
  { id: 4, title: 'Movie 4', image: './images/image4.jpg' },
  { id: 1, title: 'Movie 1', image: './images/image1.jpg' },
  { id: 2, title: 'Movie 2', image: './images/image2.jpeg' },
  { id: 3, title: 'Movie 3', image: './images/image3.jpg' },
  { id: 4, title: 'Movie 4', image: './images/image4.jpg' },
  { id: 1, title: 'Movie 1', image: './images/image1.jpg' },
  { id: 2, title: 'Movie 2', image: './images/image2.jpeg' },
  { id: 3, title: 'Movie 3', image: './images/image3.jpg' },
  { id: 4, title: 'Movie 4', image: './images/image4.jpg' },
  // Add more movie objects here
];

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-item">
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
