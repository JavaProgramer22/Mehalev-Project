import React from "react";
import Api from "../services/api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, arrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

const advanceSearch = {
  cursor: "pointer",
  color: "blue",
  textDecoration: "underline"
};

export default class IdeasBank extends React.Component {
  constructor() {
    super();
    this.state = {
      Ideas: []
    };
    this.setIdeaInSession = this.setIdeaInSession.bind(this);
  }
  componentDidMount() {
    const Ideas = Api.getIdeas();
    this.setState({ Ideas });
  }
  setIdeaInSession(idea) {
    sessionStorage.clear();
    sessionStorage.setItem("Idea", JSON.stringify(idea));
  }
  render() {
    return (
      <Container>
        <Row dir="rtl" className="justify-content-start">
          <h4 style={{ textAlign: "right" }}>רעיונות חדשים לפרויקטים</h4>
        </Row>

        <Row
          className="mt-2 ml-5 mr-5  justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          {this.state.Ideas.map((idea, i) => {
            return (
              <div class="w3-card-4 w3-dark-grey">
                <Container>
                  <Card
                    dir="rtl"
                    key={i}
                    // style={{ width: "18rem", marginTop: "20px" }}
                    style={{ textAlign: "right" }}
                    className="mr-2 ml-2 mb-2 mt-2"
                  >
                    <Card.Header as="h5">{idea.title}</Card.Header>

                    <Card.Body>
                      <Row className="justify-content-start">
                        <Col>
                          <Card.Text>{idea.about}</Card.Text>
                        </Col>
                      </Row>
                      <button className="btn btn-success w-25 ml-3">קבל</button>
                      <button className="btn btn-danger w-25 ml-3">דחה</button>

                      <Link
                        to={`/newidea/${idea.id}`}
                        onClick={e => this.setIdeaInSession(idea)}
                      >
                        <button className="btn btn-secondary w-25  ml-3">
                          ערוך
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}
