import React from "react";
import Api from "../services/api";
import pdfImage from "../../src/assets/images/pdf.png";
import xlsx from "../../src/assets/images/xlsx.png";
import matlab from "../../src/assets/images/matlab.jpg";
import pptx from "../../src/assets/images/pptx.png";
import Loading from "../../loading";
import css from "./css/checkbox";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      Projects: [],
      flag: true
    };
  }
  componentDidMount() {
    const Projects = Api.getSearch();
    this.setState({ Projects });
    setTimeout(() => {
      this.setState({
        flag: false
      });
    }, 1500);
  }

  render() {
    return this.state.flag ? (
      <Loading />
    ) : (
      <div
        className="accordion"
        id="accordionExample"
        dir="rtl"
        style={{ textAlign: "right" }}
      >
        {this.state.Projects.map((project, index) => {
          return (
            <div className="card" key={index} style={{ overflow: "visible" }}>
              <div className="card-header" id="headingOne">
                <div className="row">
                  <div className="col-2 col-md-2 col-sm-2 col-lg-2">
                    {" "}
                    <button
                      className="btn btn-outline-info"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#project${project.id}`}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      // onClick={e => this.getEmpForProject(project.id)}
                    >
                      מידע
                    </button>
                  </div>
                  <div className="col-8 col-md-8 col-sm-8 col-lg-8 text-right">
                    <h5> {project.title}</h5>
                  </div>
                  <div className="col-2 col-md-2 col-lg-2 col-sm-2">
                    <div class="checkbox-wrapper">
                      <Row>
                        <input type="checkbox" id="check" />
                        <label for="check" class="checkmark"></label>
                      </Row>
                    </div>
                  </div>
                </div>

                {/* ends card-header div */}
              </div>
              <div
                id={`project${project.id}`}
                className="collapse "
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Row>
                    {" "}
                    <strong>מבצעי הפרויקט:</strong>
                    {project.author}
                  </Row>
                  <Row>
                    {" "}
                    <strong>מנחה:</strong>
                    {project.supervisor}
                  </Row>
                  <Row>{project.about}</Row>
                  <Row className="mt-4">
                    <Col md={3}>
                      <p style={{ fontSize: "14px" }}>
                        <img
                          src={pdfImage}
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                        <a href="#">Project Book.pdf</a>
                      </p>
                    </Col>
                    <Col md={3}>
                      {" "}
                      <p style={{ fontSize: "14px" }}>
                        <img
                          src={xlsx}
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                        <a href="#">Statistics.xlsx</a>
                      </p>
                    </Col>
                    <Col md={3}>
                      {" "}
                      <p style={{ fontSize: "14px" }}>
                        <img
                          src={pptx}
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                        <a href="#">Final Presentation.pptx</a>
                      </p>
                    </Col>
                    <Col md={3}>
                      {" "}
                      <p style={{ fontSize: "14px" }}>
                        <img
                          src={matlab}
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                        <a href="#">Project Matlab.m</a>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
