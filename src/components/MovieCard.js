import React from 'react';
import '../index.css';

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
  // <div className="row">
  //   <div className="col s12">
  //     <div className="card blue-grey darken-1">
  //       <div className="card-content white-text">
  //         <span className="card-title">{title}</span>

  //         <p>{overview}</p>
  //         <img src={`https://image.tmdb.org/t/p/w200${posterPath}`} />
  //       </div>
  //       <div className="card-action">
  //         <button
  //           className="btn waves-effect waves-light"
  //           type="submit"
  //           name="action"
  //         >
  //           Submit
  //           <i className="material-icons right">send</i>
  //         </button>
  //         <a href="#">This is a link</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  <div className="main">
    <div className="card">
      <span className="card-title">{title}</span>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={`https://image.tmdb.org/t/p/w200${posterPath}`}
        />
      </div>

      <div className="card-content">
        {/* <span className="card-title">{title}</span> */}
        <p>Click on image for movie details</p>
        <p>
          <a href="#">Add button goes here</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title for reveal
          <i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  </div>
);

export default MovieCard;
