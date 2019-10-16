import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMailBulk,
  faCity,
  faEnvelope,
  faUniversity,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import InputErrors from "./InputErrors";

export default class NewIdea extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: {
        value: "",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      lastName: {
        value: "",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      email: {
        value: "",
        errors: [],
        validations: {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
      },
      topic: {
        value: "",
        errors: [],
        validations: { required: true, minLength: 5 }
      },
      message: {
        value: "",
        errors: [],
        validations: { required: true, minLength: 10 }
      }
    };

    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}

  inputChange({ target: { name, value } }) {
    const { validations } = this.state[name];
    const errors = [];

    if (validations.required) {
      if (!value) {
        errors.push(`${name} is required`);
      }
    }

    if (validations.minLength) {
      if (value.length < validations.minLength) {
        errors.push(
          `${name} should be at least ${validations.minLength} characters`
        );
      }
    }

    if (validations.pattern) {
      if (!validations.pattern.test(value)) {
        errors.push(`invalid ${name}`);
      }
    }

    this.setState({
      [name]: {
        ...this.state[name],
        value: value,
        errors
      }
    });
  }

  submit(e) {
    //1- validate each field
    //2- show errors if any validations failed
    //3- if everything's OK, than send the data to...

    for (const key in this.state) {
      this.inputChange({ target: { value: this.state[key].value, name: key } });
    }

    //How can I know if every field is valid?

    //Send the data outside...

    e.preventDefault();
  }

  render() {
    return (
      <Container style={{marginBottom:"100px" }}>
        <h4 className="alert-heading text-center">צור קשר</h4>
        <hr></hr>
        <form onSubmit={this.submit}>
          <div className="row offset-md-1  mb-1 text-right">
            <div className="col-md-4">
              <label htmlFor="lastName"  style={{ color: "#003366", fontSize: "16px" }}>שם משפחה</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="שם משפחה"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  id="lastName"
                  name="lastName"
                  defaultValue={this.state.lastName.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.lastName.errors} />
            </div>
            <div className="col-md-4 offset-md-2 mb-1">
              <label htmlFor="firstName" style={{ color: "#003366", fontSize: "16px" }}>שם פרטי</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="שם פרטי"
                  aria-label="Firstname"
                  aria-describedby="basic-addon1"
                  id="firstName"
                  name="firstName"
                  defaultValue={this.state.firstName.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.firstName.errors} />
            </div>
          </div>
          <div className="row offset-md-1 mb-3 text-right">
            <div className="col-md-3" />
            <div className="col-md-5 offset-md-2 mb-3">
              <label htmlFor="studentEmail" style={{ color: "#003366", fontSize: "16px" }}>אימייל</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="אימייל"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  id="studentEmail"
                  name="email"
                  defaultValue={this.state.email.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.email.errors} />
            </div>
          </div>
          רקע אקדמי ונסיון תעסוקתי


          <div className="row offset-md-1 mb-3">
            <div className="col-md-10 mb-3 text-right">
              <label htmlFor="message" style={{ color: "#003366", fontSize: "16px" }}>תוכן ההודעה</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                </div>
                <textarea
                  style={{height:"150px"}}
                  className="form-control text-right"
                  placeholder="הודעה"
                  aria-label="With textarea"
                  id="message"
                  name="message"
                  defaultValue={this.state.message.value}
                  onBlur={this.inputChange}
                ></textarea>
              </div>
              <InputErrors errors={this.state.message.errors} />
            </div>
          </div>
          <div className="row offset-md-1  mb-1 text-right">
            <div className="col-md-3" />
            <div className="col-md-5 offset-md-2">
              <label htmlFor="topicMessage" style={{ color: "#003366", fontSize: "16px" }}>נושא ההודעה</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="נושא ההודעה"
                  aria-label="Topic"
                  aria-describedby="basic-addon1"
                  id="topic"
                  name="topic"
                  defaultValue={this.state.topic.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.topic.errors} />
            </div>
          </div>

          <div className="row offset-md-1 mb-3">
            <div className="col-md-10 mb-3 text-right">
              <label htmlFor="message" style={{ color: "#003366", fontSize: "16px" }}>תוכן ההודעה</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </span>
                </div>
                <textarea
                  style={{height:"150px"}}
                  className="form-control text-right"
                  placeholder="הודעה"
                  aria-label="With textarea"
                  id="message"
                  name="message"
                  defaultValue={this.state.message.value}
                  onBlur={this.inputChange}
                ></textarea>
              </div>
              <InputErrors errors={this.state.message.errors} />
            </div>
          </div>
          <Row className="justify-content-center">
            <button type="submit" className="btn btn-primary w-25">
              שלח
            </button>
          </Row>
        </form>
        <Row className="justify-content-center"/>

      </Container>
    );
  }
}
