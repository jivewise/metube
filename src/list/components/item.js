import React from 'react';
import {Card} from 'react-bootstrap';

const VideoItem = ({snippet, id, statistics}) => (
  <Card>
    <Card.Img variant="top" src={snippet.thumbnails.default.url} />
    <Card.Body>
      <Card.Title>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/watch?v=${id.videoId}`}>
          {snippet.title}
        </a>
      </Card.Title>
      <Card.Text>{snippet.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Comments: {statistics.commentCount || 0}</small>
    </Card.Footer>
  </Card>
);

export default VideoItem;
