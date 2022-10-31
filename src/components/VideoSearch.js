import React, { useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const VideoSearch = () => {
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => setInput(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getMovies();
    }
  };

  const BASE_API_URL = process.env.NODE_ENV.trim() === 'production' ? 'https://video-store-backend-01.herokuapp.com' : 'http://127.0.0.1:3000';

  console.log(`BASE_API_URL: ${BASE_API_URL}`);

  const getMovies = async () => {
    const results = await axios
      .get(`${BASE_API_URL}/videos?query=${input}`)
      .then((response) => {
        return response.data;
      });
    setSearchResults(results);
  };

  return (
    <>
      <div className="customer-padding">
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

        <div className="container">
          <div className="videoSearchContainer">
            {searchResults.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSearch;
