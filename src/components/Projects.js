import React from "react";
import Api from "../services/api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, arrowUp } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      Projects: []
    };
  }
  componentDidMount() {
    const Projects = Api.getProjects();
    this.setState({ Projects });
  }

  render() {
    return (
      <Container>
        
        <Row className="justify-content-center">
          <h1>פרויקטים ועבודות גמר של סטודנטים</h1>
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

        <Row
          className="mt-5 ml-5 mr-5  justify-content-around"
          style={{ marginBottom: "100px" }}
        >
          {this.state.Projects.map((project, i) => {
            return (
              <Card
                key={i}
                style={{ width: "18rem", marginTop: "20px" }}
                className="mr-2 ml-2 mb-2 mt-2"
              >
                <iframe src={project.youtubeUrl}></iframe>
                <Card.Body style={{ textAlign: "right" }}>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.about}</Card.Text>
                  <Button variant="primary">קרא עוד</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    );
  }
}
