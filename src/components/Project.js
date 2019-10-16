import React, { Component } from "react";
import Api from "../services/api";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BackBtn from "../components/BackBtn";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { projectData: {} };
  }
  componentDidMount() {
    const projectData = JSON.parse(sessionStorage.getItem("Project"));
    this.setState({ projectData });
    // const { id } = this.props.match.params;
    // const projectData = Api.getProjectsByID(id);
    // console.log(projectData);
    // this.setState({ projectData });
  }
  render() {
    return (
      <Container style={{marginBottom:"150px"}} className="mt-5">
        <Row className="justify-content-center">
          <Card
            dir="rtl"
            // style={{ width: "18rem", marginTop: "20px" }}
            style={{ textAlign: "right" }}
            className="mr-2 ml-2 mb-2 mt-2"
          >
            <Card.Header as="h5">{this.state.projectData.title}</Card.Header>

            <Card.Body>
              <Row className="justify-content-start">
                {/* <Card.Title>{project.title}</Card.Title> */}
                <Col md={6}>
                  <Card.Text>
                    <strong>מבצעי הפרויקט:</strong>{" "}
                    {this.state.projectData.author}
                  </Card.Text>
                  <Card.Text>
                    <strong>מנחה:</strong> {this.state.projectData.supervisor}
                  </Card.Text>
                  <Card.Text>{this.state.projectData.about}</Card.Text>
                </Col>
                <Col md={6}>
                  <iframe
                    style={{ width: "30rem", height: "20rem" }}
                    src={this.state.projectData.youtubeUrl}
                  ></iframe>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
            
        </Row>
      </Container>
    );
  }
}

export default Project;
