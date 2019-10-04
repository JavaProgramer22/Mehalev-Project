import React from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        style={{ borderBottom: "1px solid purple" }}
        className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between"
      >
        <Link to="/">
          <img src="logo.PNG" className="" style={{ height: "100px" }} />
        </Link>
        
      </nav>
    );
  }
}
