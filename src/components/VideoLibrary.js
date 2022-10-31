import React, { useState, useEffect } from 'react';
import Video from './Video';
import axios from 'axios';

function VideoLibrary(props) {
  const [videos, setVideos] = useState([]);
  const BASE_API_URL = process.env.NODE_ENV.trim() === 'production' ? 'https://video-store-backend-01.herokuapp.com' : 'http://127.0.0.1:3000';

  useEffect(() => {
    axios      
      .get(`${BASE_API_URL}/videos`)
      // converting the data into json
      .then((response) => {
        setVideos(response.data);
      });
    // received data as customers
  }, []);

  return (
    <div className="container">
      <div className="card-list">
        {videos.map((video) => (
          <Video currCard = {props.currCard} setCurrCard = {props.setCurrCard} key={video.id} video={video} />

        ))}
      </div>
    </div>
  );
}

export default VideoLibrary;
