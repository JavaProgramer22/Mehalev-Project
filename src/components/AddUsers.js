import React from "react";
import Api from "../services/api";
import Temp from "./SearchTable";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMailBulk,
  faPhone,
  faCity,
  faEnvelope,
  faUniversity,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";
import InputErrors from "./InputErrors";

export default class addUser extends React.Component {
  constructor() {
    super();
    this.state = {
      // roles: {
      //   value: "Roles",
      //   errors: [],
      //   validations: { required: true },
      //   role1: { name: "asdfsadf", flag: false },
      //   role2: { name: "basdasd", flag: false },
      //   role3: { name: "c", flag: false },
      //   role4: { name: "d", flag: false },
      //   role5: { name: "e", flag: false },
      //   role6: { name: "r", flag: false }
      // },
      projects: [],
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
      phoneNumber: {
        value: "",
        errors: [],
        validations: {
          required: true
        }
      },

      role1: {
        name: "ציפה בקבצי פרויקט מסוים",
        flag: false,
        value: "1"
      },
      role2: {
        name: "אדמיניסטרטור",
        flag: false,
        value: "2"
      },
      role3: {
        name: "סטודנט",
        flag: false,
        value: "3"
      },
      role4: {
        name: "מנחה",
        flag: false,
        value: "4"
      },
      role5: {
        name: "מנהל",
        flag: false,
        value: "5"
      },
      // role6: {
      //   name: "e",
      //   flag: false
      // }
      showSearchTable: {
        flag: false,
        value: "search"
      }
    };
    this.searchFlag = false;
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.addRole = this.addRole.bind(this);
    this.showSearchProject = this.showSearchProject.bind(this);
  }

  componentDidMount() {
    const Projects = Api.getSearch();
    this.setState({ Projects });
    console.log({ Projects });
  }

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

  addRole({ target: { name } }) {
    if (name == "role1") {
      this.searchFlag = !this.searchFlag;
    }

    this.setState({
      [name]: {
        ...this.state[name],
        flag: !this.state[name].flag
      }
    });
  }
  showSearchProject({ target: { name } }) {
    // console.log(this.state.showSearchTable.flag);

    this.setState({
      [name]: {
        ...this.state[name],
        flag: !this.state[name].flag
      }
    });
    // console.log(this.state.showSearchTable.flag);
    // this.showTableflag = !this.showTableflag;
    // console.log(this.showTableflag);
  }
  submit(e) {
    //1- validate each field
    //2- show errors if any validations failed
    //3- if everything's OK, than send the data to...
    e.preventDefault();
    // for (const key in this.state) {
    //   this.inputChange({ target: { value: this.state[key].value, name: key } });
    // }
    if (!this.state.firstName.value) {
      toast.error("חסר שם פרטי");
      return;
    }

    if (!this.state.lastName.value) {
      toast.error("חסר שם משפחה ");
      return;
    }
    if (!this.state.email.value) {
      toast.error("חסר אימיאל ");
      return;
    }
    if (!this.state.phoneNumber.value) {
      toast.error("חסר מספר טלפון");
      return;
    }

    try {
      setTimeout(() => {
        toast.success("המשתמש הוכנס בהצלחה");
      }, 4000);
    } catch (error) {
      toast.error("שפ פרויקט צריך להיות יחודי");
    }

    //How can I know if every field is valid?

    //Send the data outside...
  }

  render() {
    return (
      <Container style={{ marginBottom: "100px" }}>
        {/* <h4 /> */}
        <h4 className="alert-heading text-center">הוספת משתמש חדש </h4>
        <hr></hr>
        <form onSubmit={this.submit}>
          <div className="row   offset-md-1  mb-1 text-right">
            <div className="col-md-4">
              <label
                htmlFor="lastName"
                style={{ color: "#003366", fontSize: "16px" }}
              >
                שם משפחה
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
                  defaultValue={this.state.lastName.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.lastName.errors} />
            </div>
            <div className="col-md-4 offset-md-2 mb-3">
              <label
                htmlFor="firstName"
                style={{ color: "#003366", fontSize: "16px" }}
              >
                שם פרטי
              </label>
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
          <div className="row  offset-md-1 mb-1 text-right">
            <div className="col-md-4">
              <label
                htmlFor="lastName"
                style={{ color: "#003366", fontSize: "16px" }}
              >
                מספר טלפון
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </div>

                <input
                  type="text"
                  className="form-control input_phone text-right"
                  placeholder="מספר טלפון"
                  aria-label="phoneNumber"
                  aria-describedby="basic-addon1"
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultValue={this.state.phoneNumber.value}
                  onBlur={this.inputChange}
                ></input>
              </div>
              <InputErrors errors={this.state.lastName.errors} />
            </div>
            <div className="col-md-4 offset-md-2 mb-3">
              <label
                htmlFor="studentEmail"
                style={{ color: "#003366", fontSize: "16px" }}
              >
                אימייל
              </label>
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

          <div className="row justify-content-center  mb-1 text-right">
            <div className="col-md-12 mb-3 text-center">
              <h5 className="mt-4 ">הרשאות משתמש </h5>
              <hr></hr>
              {this.state.role1.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role1"
                  onClick={this.addRole}
                >
                  {this.state.role1.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role1"
                  onClick={this.addRole}
                >
                  {this.state.role1.name}
                </button>
              )}
              {this.state.role2.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role2"
                  onClick={this.addRole}
                >
                  {this.state.role2.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role2"
                  onClick={this.addRole}
                >
                  {this.state.role2.name}
                </button>
              )}
              {this.state.role3.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role3"
                  onClick={this.addRole}
                >
                  {this.state.role3.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role3"
                  onClick={this.addRole}
                >
                  {this.state.role3.name}
                </button>
              )}
              {this.state.role4.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role4"
                  onClick={this.addRole}
                >
                  {this.state.role4.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role4"
                  onClick={this.addRole}
                >
                  {this.state.role4.name}
                </button>
              )}
              {this.state.role5.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role5"
                  onClick={this.addRole}
                >
                  {this.state.role5.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role5"
                  onClick={this.addRole}
                >
                  {this.state.role5.name}
                </button>
              )}

              {/* {this.state.role6.flag ? (
                <button
                  type="button"
                  className="btn btn-outline-success ml-2 mr-2"
                  name="role6"
                  onClick={this.addRole}
                >
                  {this.state.role6.name}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-2 mr-2"
                  name="role6"
                  onClick={this.addRole}
                >
                  {this.state.role6.name}
                </button>
              )} */}
            </div>
          </div>
          {this.searchFlag ? (
            <>
              <Row className="justify-content-center mt-5 mb-1 text-right">
                <h5>בחירת פרויקטיים להראשה </h5>
              </Row>
              <Row className="justify-content-center mt-1 mb-5">
                <Col md={10}>
                  <InputGroup>
                    <InputGroup.Append>
                      <Button
                        variant="outline-info"
                        onClick={this.showSearchProject}
                        name="showSearchTable"
                      >
                        חפש
                      </Button>
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
            </>
          ) : (
            <></>
          )}

          {this.state.showSearchTable.flag ? (
            <Row className="justify-content-center mt-5">
              <Col md={10}>
                <Temp />
              </Col>
            </Row>
          ) : (
            <></>
          )}

          <Row className="justify-content-center mt-5">
            <button type="submit" className="btn btn-primary w-25">
              שלח
            </button>
          </Row>
        </form>
      </Container>
    );
  }
}
