import React, { Component } from "react";
import Api from "../services/api";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BackBtn from "../components/BackBtn";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryData: {} };
  }
  componentDidMount() {
    const categoryData = JSON.parse(sessionStorage.getItem("Category"));
    this.setState({ categoryData });
    // const { id } = this.props.match.params;
    // const projectData = Api.getProjectsByID(id);
    // console.log(projectData);
    // this.setState({ projectData });
  }
  render() {
    return (
      <Container style={{ marginBottom: "150px" }} className="mt-5">
        <Row className="justify-content-center">
          <Card
            dir="rtl"
            style={{ textAlign: "right" }}
            className="mr-2 ml-2 mb-2 mt-2"
          >
            <Card.Header as="h5">{this.state.categoryData.title}</Card.Header>

            <Card.Body>
              <Row className="justify-content-start">
                <Col></Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}

export default Category;
