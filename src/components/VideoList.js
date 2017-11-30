import React from 'react';
import VideoListItem from './VideoListItem';
const VideoList = (props) => {
  // console.log('VideoList', props.videos);
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={props.onVideoSelect}
    />;
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;