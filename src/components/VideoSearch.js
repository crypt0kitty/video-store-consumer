import React, { useState } from 'react';
import MovieCard from './MovieCard';

const VideoSearch = () => {
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => setInput(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getMovies();
    }
  };

  const getMovies = async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fab6e945ca8bd693a69acea57b30c0b9&language=en-US&page=1&include_adult=false&query=${input}`
    ).then((response) => response.json());
    setSearchResults(results);
  };

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="searchMovies"
            type="text"
            className="validate"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={input}
            placeholder="Search Movies"
          />
        </div>
      </div>

      {searchResults.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </>
  );
};

export default VideoSearch;
