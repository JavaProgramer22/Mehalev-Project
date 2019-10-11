import React from "react";
import Api from "../services/api";
import { Container, Row, Col } from "react-bootstrap";

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
          {console.log(this.state.Projects)}
          <h1>projects Component</h1>
          {this.state.Projects.map((project, i) => {
            return <Row><h1>{project.title}</h1></Row>
          })}
      </Container>
    );
  }
}
