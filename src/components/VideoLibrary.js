import React, { useState, useEffect } from 'react';
import Video from './Video';

function VideoLibrary() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    /* data from: https://api.themoviedb.org/3/movie/550?api_key=fab6e945ca8bd693a69acea57b30c0b9 */
    fetch('http://localhost:3000/videos')
      // converting the data into json
      .then((response) => response.json())
      // received data as customers
      .then((videos) => setVideos(videos));
  }, []);
  console.log(videos);

  return (
    <div className="VideosList">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoLibrary;
