import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class PageNotFound extends React.Component {
  render() {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Row>
          <h4>Page not found</h4>
        </Row>
      </Container>
    );
  }
}
