import React from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';

const Video = ({ video: { title, overview, image_url: imageURL } }) => (
  <div className="main">
    <div className="movieTitle">{title}</div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {/* <img src={`https://image.tmdb.org/t/p/w200${imageURL}`} /> */}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"></span>
        <p>{overview}</p>
      </div>
    </div>
  </div>
);

export default Video;
