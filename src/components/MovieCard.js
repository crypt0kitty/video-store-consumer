import React from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const { overview, title, image_url: imageUrl } = movie;
  const addVideoToLibrary = () => {
    axios
      .post('http://localhost:3000/videos', movie)
      .then((response) => {})
      .catch((error) => {});
  };
  return (
    <div className="main">
      <div className="movieTitle">{title}</div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={imageUrl} alt="movie poster" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4"></span>
          <p>{overview.substring(100, 0)}</p>
        </div>
        <box className="button">
          <button
            className="waves-effect waves-light btn-small"
            onClick={addVideoToLibrary}
          >
            Add to Video Library
          </button>
        </box>
      </div>
    </div>
  );
};

export default MovieCard;
