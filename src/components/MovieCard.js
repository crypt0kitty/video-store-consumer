import React from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';

const MovieCard = ({
  movie: {
    adult,
    backdrop_path: backdropPath,
    genre_ids: genreIds,
    id,
    original_language: originalLanguage,
    original_title: originalTitle,
    overview,
    popularity,
    poster_path: posterPath,
    release_date: releaseDate,
    title,
    video,
    vote_average: voteAverage,
    vote_count: voteCount,
  },
}) => (
  <div className="main">
    <div className="movieTitle">{title}</div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={`https://image.tmdb.org/t/p/w200${posterPath}`} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"></span>
        <p>{overview}</p>
      </div>
      <div className="waves-effect waves-light btn-small">
        Add to Video Library
      </div>
    </div>
  </div>
);

export default MovieCard;
