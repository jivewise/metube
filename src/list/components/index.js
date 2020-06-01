import React from 'react';
import PropTypes from 'prop-types';
import {Container, CardColumns} from 'react-bootstrap';
import VideoItem from './item';

const VideoList = ({data}) => (
  <Container>
    <CardColumns>
      {data.map(video => (
        <VideoItem key={video.id.videoId} {...video} />
      ))}
    </CardColumns>
  </Container>
);

VideoList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VideoList;
