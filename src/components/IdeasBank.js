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
        <Row className="justify-content-center">
          <h1 style={{ textAlign: "right" }}>
            רעיונות לפרויקטים
          </h1>
        </Row>
        <Row className="justify-content-center">
          <p dir="rtl" style={{ textAlign: "right" }}>
            ניתן לעזור באופן מעשי לארגון או אדם
            שזקוקים לסיוע הנדסי, בכדי להתמודד ביתר קלות עם המציאות.
            בעמוד זה ישנן רעיונות לתפירת מוצר חדש.
          </p>
        </Row>
        
               <Row
          className="mt-2 ml-5 mr-5  justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          {this.state.Ideas.map((idea, i) => {
            return (
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
                  <Link
                    to={`/ideas/${idea.id}`}
                    onClick={e => this.setIdeaInSession(idea)}
                  >
                      <div dir="ltr">
                    <Button variant="primary">בקש מידע נוסף</Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    );
  }
}
