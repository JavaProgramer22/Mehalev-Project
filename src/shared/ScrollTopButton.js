import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const btnScrollToTop = {
  position: "fixed",
  right: "10px",
  bottom: "70px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#0474b6",
  boxShadow: "0 0 10px rgba(0,0,0,0.25)",
  color: "#fff",
  border: "none",
  outline: "none",
  cursor: "pointer"
};

class ScrollTopButton extends React.Component {
  scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render() {
    return (
      <>
        <button style={btnScrollToTop} onClick={this.scrollUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </>
    );
  }
}
export default ScrollTopButton