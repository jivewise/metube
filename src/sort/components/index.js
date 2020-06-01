import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const Sort = ({sort, updateSort}) => (
  <Container>
    <Row>
      <Col>
        <select
          className="float-right mb-3"
          value={sort}
          onChange={updateSort}
          aria-label="Sort By">
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="relevance">Relevance</option>
        </select>
      </Col>
    </Row>
  </Container>
);

export default Sort;
