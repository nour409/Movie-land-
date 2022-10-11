
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';



const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const searchMovie = async (title) => {
   const response = await fetch('https://www.omdbapi.com/?apikey=ad6412ba&s='+title);
   
    let data = await response.json();


    setMovies(data.Search)
    console.log(title);

  }

  useEffect(() => {
    // Update the document title using the browser API
 
   // searchMovie("batman");
  });
  return (
    <div className="app">
      <h1>AyaNasserMovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
