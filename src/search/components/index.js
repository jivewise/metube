import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

const Search = ({loading, searchTerm, reqSearch, updateTerm}) => {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mt-5 mb-3">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="Search Input"
              onChange={updateTerm}
              value={searchTerm}
            />
            <InputGroup.Append>
              <Button onClick={reqSearch} variant="outline-primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  reqSearch: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default Search;
