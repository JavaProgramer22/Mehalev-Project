import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <div dir="rtl" style={{ borderBottom: "1px solid purple" }}>
        <Row className="m-2">
          <Col md={2} className="d-flex justify-content-start">
            <Link to="/">
              <img src="../loading.png" className="" style={{ height: "100px" }} />
            </Link>
          </Col>
          <Col md={8} className="d-flex justify-content-center">
            <Link to="/">
              <img src="../mehalev.png" className="" style={{ height: "100px" }} />
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
