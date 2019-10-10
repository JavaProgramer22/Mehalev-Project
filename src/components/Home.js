import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <>
        {/* {" "}
        <div className="d-flex justify-content-center mt-5">
          <h1>Home</h1>
        </div>
        <div dir="rtl" lang="he">
          <div className="row mt-5 mr-5">
            <h2 style={{ color: "#003366", fontSize: "18pt" }}>אודות</h2>
          </div>
          <div className="row mt-2 mr-5">
            <span>
              <strong style={{ color: "#666699", fontSize: "16px" }}>
                מהנדסים למען הקהילה
              </strong>
            </span>
          </div>
          <div className="row mt-2 mr-5">
            <div className="">
              <span>
                <p style={{ textAlign: "right" }}>
                  אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ
                  למקם טקסט אמיתי אחר. הסיבה היא, כי בעת הצגת סקיצה עם טקסט
                  אמיתי קריא, יתחיל הצופה לקרוא אוטומטית את הטקסט, ואם תוכן
                  הטקסט לא רלוונטי לעבודה המוצגת - הדבר יסיח את דעתו מהעיצוב.
                </p>
              </span>
            </div>
          </div>
        </div> */}
        <Container>
          <Row className="justify-content-center">
            <h1>Home</h1>
          </Row>
          <div dir="rtl">
            <Row>
              <h2 style={{ color: "#003366", fontSize: "18pt" }}>אודות</h2>
            </Row>
            <Row>
              <strong style={{ color: "#666699", fontSize: "16px" }}>
                מהנדסים למען הקהילה
              </strong>
            </Row>
            <Row>
              <p style={{ textAlign: "right" }}>
                אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ
                למקם טקסט אמיתי אחר. הסיבה היא, כי בעת הצגת סקיצה עם טקסט אמיתי
                קריא, יתחיל הצופה לקרוא אוטומטית את הטקסט, ואם תוכן הטקסט לא
                רלוונטי לעבודה המוצגת - הדבר יסיח את דעתו מהעיצוב.
              </p>
            </Row>
          </div>
        </Container>

      </>
    );
  }
}
