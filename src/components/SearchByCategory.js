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

export default class SearchByCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: []
    };
    this.setCategoryInSession = this.setCategoryInSession.bind(this);
  }
  componentDidMount() {
    const Categories = Api.getCategories();
    this.setState({ Categories });
  }
  setCategoryInSession(Category) {
    sessionStorage.clear();
    sessionStorage.setItem("Category", JSON.stringify(Category));
  }
  render() {
    return (
      <Container>
        <Row dir="rtl">
          <h1 style={{ textAlign: "right" }}>מרכז החיפוש לפרויקטים</h1>
        </Row>
        <Row dir="rtl" className="justify-content-start">
          <h3>בחרו באחת מהאפשרויות הבאות</h3>
        </Row>
        <Row
          className="mt-2 ml-5 mr-5  justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          {this.state.Categories.map((category, i) => {
            return (
              <Card
                dir="rtl"
                key={i}
                style={{ textAlign: "center", width: "300px", height: "220px" }}
                className="mr-2 ml-2 mb-2 mt-2"
              >
                <Card.Header as="h5">{category.title}</Card.Header>

                <Card.Body>
                  <Row className="justify-content-center">
                    <Link
                      to={`/category/${category.id}`}
                      // to={"/projects"}
                      onClick={e => this.setCategoryInSession(category)}
                    >
                      <img src={category.imgSrc}></img>
                    </Link>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Row>{" "}
      </Container>
    );
  }
}
