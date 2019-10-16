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

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      Projects: []
    };
    this.setProjectInSession = this.setProjectInSession.bind(this);
  }
  componentDidMount() {
    const Projects = Api.getProjects();
    this.setState({ Projects });
  }
  setProjectInSession(project) {
    sessionStorage.clear();
    sessionStorage.setItem("Project", JSON.stringify(project));
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 style={{ textAlign: "right" }}>
            פרויקטים ועבודות גמר של סטודנטים
          </h1>
        </Row>
        <Row className="justify-content-center">
          <p dir="rtl" style={{ textAlign: "right" }}>
            בוגרי תכניות הלימוד במכללה מתגייסים למען אוכלוסייה בעלת צרכים
            מיוחדים ומייצרים עבורם פתרונות הנדסיים. כחלק ממדיניות המכללה
            ומעורבותה החברתית והקהילתית, רבים מהסטודנטים, בעידוד אנשי הסגל,
            מבצעים את עבודת הגמר שלהם בניסיון לעזור באופן מעשי לארגון או אדם
            שזקוקים לסיוע הנדסי כזה או אחר, בכדי להתמודד ביתר קלות עם המציאות.
            בעמוד זה ישנן דוגמאות לעבודות גמר שכאלה, כולל שרטוטים גרפיים להמחשה.
            לתשומת לבכם, לחלק מהפרויקטים צולמו ונערכו גם סרטוני וידאו קצרים
            ומרגשים שמפגישים בין מבצעי הפרוייקטים למקבליהם.
          </p>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <InputGroup>
              <FormControl
                placeholder="Project Name"
                aria-label="Project Name"
                // aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-info">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          {" "}
          <Link> Advance Search</Link>
        </Row>
        <Row
          className="mt-2 ml-5 mr-5  justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          {this.state.Projects.map((project, i) => {
            return (
              <Card
                dir="rtl"
                key={i}
                // style={{ width: "18rem", marginTop: "20px" }}
                style={{ textAlign: "right" }}
                className="mr-2 ml-2 mb-2 mt-2"
              >
                <Card.Header as="h5">{project.title}</Card.Header>

                <Card.Body>
                  <Row className="justify-content-start">
                    {/* <Card.Title>{project.title}</Card.Title> */}
                    <Col md={6}>
                      <Card.Text>
                        <strong>מבצעי הפרויקט:</strong> {project.author}
                      </Card.Text>
                      <Card.Text>
                        <strong>מנחה:</strong> {project.supervisor}
                      </Card.Text>
                      <Card.Text>{project.about}</Card.Text>
                    </Col>
                    <Col md={6}>
                      <iframe
                        style={{ width: "27rem", height: "20rem" }}
                        src={project.youtubeUrl}
                      ></iframe>
                    </Col>
                  </Row>
                  <Link
                    to={`/project/${project.id}`}
                    onClick={e => this.setProjectInSession(project)}
                  >
                    <Button variant="primary">קרא עוד</Button>
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
