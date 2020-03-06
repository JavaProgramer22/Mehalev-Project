import React from "react";
import Api from "../services/api";
import { Link } from "react-router-dom";
import pdfImage from "../../src/assets/images/pdf.png";
import xlsx from "../../src/assets/images/xlsx.png";
import matlab from "../../src/assets/images/matlab.jpg";
import pptx from "../../src/assets/images/pptx.png";
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
      Projects: [],
      Files: []
    };
    this.setProjectInSession = this.setProjectInSession.bind(this);
  }
  componentDidMount() {
    const Projects = Api.getnewProjects();
    const Files = Api.getFiles();
    this.setState({ Projects, Files });
    console.log(Files[0].img);
  }
  setProjectInSession(project) {
    sessionStorage.clear();
    sessionStorage.setItem("Project", JSON.stringify(project));
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1 style={{ textAlign: "right" }}>פרויקטים חדשים</h1>
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
              <InputGroup.Append>
                <Button variant="outline-info">חפש</Button>
              </InputGroup.Append>
              <FormControl
                style={{ textAlign: "right" }}
                placeholder="הקלד מילות חיפוש"
                aria-label="Project Name"
                // aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          {" "}
          <Link to={`/category`}> חיפוש מתקדם</Link>
          {/*  to={`/category/${category.id}`}
         onClick={e => this.setCategoryInSession(category)} */}
        </Row>
      </Container>
    );
  }
}
