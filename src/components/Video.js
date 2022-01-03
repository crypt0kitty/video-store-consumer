import React, { useState, useEffect } from 'react';
import '../index.css';
import 'materialize-css/dist/css/materialize.min.css';
import Moment from 'moment';

const Video = ({ video,currCard,setCurrCard }) => {
  const { title, release_date: releaseDate, image_url: imageUrl } = video;
  const date = Moment(releaseDate).format('MMM, DD, YYYY');
  const [titles, setTitle] = useState('Select Video');

  function addVideoToLibrary() {
      return title;

  }

  function saveCard(){
    console.log(currCard)
    setCurrCard({
      title: title,
      image: imageUrl,
    })
  }
    
  return (
    <div className="card videoLibraryContainer">
      <div className="card-image waves-effect waves-block">
        <img src={imageUrl} />
        <div className="movieTitle">{title}</div>
        <p className="date-text">{date}</p>
        <box className="button">
          <button
            className="waves-effect waves-light btn-small"
            onClick={() => {
              
              addVideoToLibrary()
              setTitle('Selected');
              saveCard()
              
            }}
          >
            {titles}
          </button>
        </box>
      </div>
    </div>
  );
};

export default Video;
