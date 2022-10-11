
import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';


const movie1={
  "Title": "Title Shot",
  "Year": "1979",
  "imdbID": "tt0080027",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjExZjNjOTctNDdmMC00NWRlLWE1MzctOTkxN2MyNTE4NzRiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
}


const App = () => {

  const searchMovie = async (title) => {
    const response = await fetch('https://www.omdbapi.com/?apikey=ad6412ba&s={title}');
    const data = await response.json();
    console.log(data.Search);

  }

  useEffect(() => {
    // Update the document title using the browser API
    searchMovie('Spiderman');
  });

  return (
    <div className='app'>
      <h1>Aya MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value="Spiderman"
          onChange={() => { }}
        />
        <img src={SearchIcon}
          alt="search" 
          onClick={()=>{}}/>
      </div>

      <div className='container'>
<div className='movie'>
<div>
  <p>{movie1.Year}</p>
</div>
<div>
  <img src={movie1.Poster} alt ="poster"></img>
</div>

<div>
  <span>{movie1.Type}</span>
  <h3>{movie1.Title}</h3>
</div>
</div>

      </div>
    </div>


  );
}

export default App;
