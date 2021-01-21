import React from 'react';

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
  <div className="row">
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>

          <p>{overview}</p>
          <img src={`https://image.tmdb.org/t/p/w200${posterPath}`} />
        </div>
        <div className="card-action">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
