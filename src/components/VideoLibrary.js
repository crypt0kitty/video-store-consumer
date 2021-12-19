import React, { useState, useEffect } from 'react';
import Video from './Video';
import axios from 'axios';
import '../index.css'


function VideoLibrary() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('https://video-store-backend-01.herokuapp.com/videos')
      // converting the data into json
      .then((response) => {
        setVideos(response.data);
      });
    // received data as customers
  }, []);

  return (
    <div className='test'>
    <div className="container">
      <div className="card-list">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default VideoLibrary;
