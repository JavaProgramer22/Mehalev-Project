import React from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signOutAlt } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center mt-5">
          <h1>Home</h1>
        </div>
        <div dir="rtl" lang="he">
          <div className="row mt-5 mr-5">
            <h2 style={{ color: "#003366", fontSize: "18pt" }}>אודות</h2>
          </div>
          <div className="row mt-2 mr-5">
            <span>
              <strong style={{ color: "#666699", fontSize: "16pt" }}>
                מהנדסים למען הקהילה
              </strong>
            </span>
          </div>
          <div className="row mt-2 mr-5">
            <div className="col-md-10 col-10 ">
              <p>
                במסגרת פעילותה של המכללה האקדמית להנדסה אורט בראודה בקהילה פועל
                משנת תשע”ב פרויקט הדגל, מהלב- פתרונות הנדסיים לאנשים עם
                מוגבלויות, בהשתתפות המחלקות האקדמיות ודקנט הסטודנטים של המכללה
                וארגונים העוסקים בשיקום ובסיוע לאנשים עם מוגבלויות. הפרויקט זוכה
                לתמיכת הועדה לתכנון ולתקצוב (ות”ת) של המועצה להשכלה גבוהה (מל”ג)
                ולתמיכת קרנות ותורמים פרטיים.
              </p>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}
