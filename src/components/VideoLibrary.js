import React, { useState, useEffect } from 'react';
import Video from './Video';

function VideoLibrary() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      // converting the data into json
      .then((response) => response.json())
      // received data as customers
      .then((videos) => setVideos(videos));
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
