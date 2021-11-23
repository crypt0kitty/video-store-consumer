import React, { useState, useEffect } from 'react';
import Video from './Video';
import axios from 'axios';

function VideoLibrary() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('https://video-store-01.herokuapp.com/videos')
      // converting the data into json
      .then((response) => {
        setVideos(response.data);
      });
    // received data as customers
  }, []);

  return (
    <div className="card-list">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoLibrary;
