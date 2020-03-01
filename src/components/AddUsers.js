import React, { useState } from "react";
import UserProfileRoles from "./UserProfileRoles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMailBulk,
  faCity,
  faEnvelope,
  faUniversity,
  faEdit,
  faIdCard
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
export default function AddUser() {
  const [err, setErr] = useState("");
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: ""
  });
  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  // function submit(e) {
  //   e.preventDefault();
  //   console.log(values.fName);
  // }
  function submit(e) {
    e.preventDefault();
    console.log(values.fName);
  }
  return (
    <Container style={{ marginBottom: "100px" }}>
      <h4 className="alert-heading text-center">Add New User</h4>
      <hr></hr>
      <form onSubmit={submit}>
        <div className="row offset-md-1  mb-1 justify-content-center">
          <div className="col-md-4">
            <label
              htmlFor="lastName"
              style={{ color: "#003366", fontSize: "16px" }}
            >
              First Name
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-describedby="basic-addon1"
                id="fName"
                name="fName"
                // defaultValue={this.state.lastName.value}
                // onBlur={this.inputChange}
                onChange={handleInput}
              ></input>
            </div>
            {/* <InputErrors errors={this.state.lastName.errors} /> */}
          </div>
          <div className="col-md-4 offset-md-2 mb-1">
            <label
              htmlFor="lName"
              style={{ color: "#003366", fontSize: "16px" }}
            >
              Last Name
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="last tname"
                aria-describedby="basic-addon1"
                id="lName"
                name="lName"
                // defaultValue={this.state.firstName.value}
                // onBlur={this.inputChange}
                onChange={handleInput}
              ></input>
            </div>
            {/* <InputErrors errors={this.state.firstName.errors} /> */}
          </div>
        </div>
        <div className="row offset-md-1  mb-1 justify-content-center">
          <div className="col-md-4">
            <label
              htmlFor="lastName"
              style={{ color: "#003366", fontSize: "16px" }}
            >
              Email
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faMailBulk} />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="email"
                aria-describedby="basic-addon1"
                id="email"
                name="email"
                // defaultValue={this.state.lastName.value}
                // onBlur={this.inputChange}
                onChange={handleInput}
              ></input>
            </div>
            {/* <InputErrors errors={this.state.lastName.errors} /> */}
          </div>
          <div className="col-md-4 offset-md-2 mb-1">
            <label
              htmlFor="lName"
              style={{ color: "#003366", fontSize: "16px" }}
            >
              Phone
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="phone"
                aria-label="phone"
                aria-describedby="basic-addon1"
                id="phone"
                name="phone"
                // defaultValue={this.state.firstName.value}
                // onBlur={this.inputChange}
                onChange={handleInput}
              ></input>
            </div>
            {/* <InputErrors errors={this.state.firstName.errors} /> */}
          </div>
        </div>
        
          <UserProfileRoles />
       
        <div className="row offset-md-1 mb-3 mt-5 justify-content-center ">
          <button type="submit" className="btn btn-primary w-25">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
}
