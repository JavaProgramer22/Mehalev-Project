import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMailBulk,
  faCity,
  faEnvelope,
  faUniversity,
  faEdit,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import InputErrors from "./InputErrors";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: {
        value: "",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      password: {
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
      <Container>
        <Row dir="rtl" className="justify-content-center">
          <h4 className="alert-heading font-weight-bold">
            בקשת התחברות למאגר הפרויקטים והרעיונות
          </h4>
        </Row>
        <hr></hr>
        <Row className="justify-content-center" style={{ fontSize: "20px" }}>
          <Col md={6}>
            <form onSubmit={this.submit}>
              <div>
                <div className="text-right">
                  <label
                    htmlFor="lastName"
                    style={{
                      color: "#003366",

                      textAlign: "right"
                    }}
                  >
                    שם משתמש
                  </label>
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
                      defaultValue={this.state.password.value}
                      onBlur={this.inputChange}
                    ></input>
                  </div>
                  <InputErrors errors={this.state.password.errors} />
                </div>

                <div className="text-right">
                  <label
                    htmlFor="firstName"
                    style={{
                      color: "#003366",

                      textAlign: "right"
                    }}
                  >
                    סיסמה
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                      </span>
                    </div>
                    <input
                      type="password"
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
              <Row className="justify-content-center text-right mt-2">
                <Col md={1}>
                  {" "}
                  <input
                    type="checkbox"
                    id="check"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Col>
                <Col md={3}>
                  {" "}
                  <label for="check"> תזכור אותי</label>
                </Col>
              </Row>
              <Row className="justify-content-center text-right mt-2">
                <a href="#">שככחתי סיסמה </a>
              </Row>
              <Row className="justify-content-center mt-3">
                <button type="submit" className="btn btn-primary w-25">
                  התחבר
                </button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
