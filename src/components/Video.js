import React from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Moment from 'moment';
import axios from 'axios';

const Video = ({ video }) => {
  const { title, release_date: releaseDate, image_url: imageUrl } = video;
  axios
    .post('http://localhost:3000/videos', video)
    .then((response) => {})
    .catch((error) => {});

  const date = Moment('2018-05-18T04:00:00.000Z').format('MMM, DD, YYYY');
  console.log(date);

  return (
    <div className="main card rounded">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={imageUrl} />
        <div className="movieTitle">{title}</div>
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4"></span>
        <p className="date-text">{date}</p>
      </div>
    </div>
    // </div>
  );
};

export default Video;
