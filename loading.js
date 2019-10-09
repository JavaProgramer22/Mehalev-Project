import React from "react";
const imgCss = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "30%"
};
export default class Loading extends React.Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col ml-3 mt-3">
            <img
              src="loading.png"
              alt="loading"
              className="center"
              style={imgCss}
            ></img>
          </div>
        </div>
      </>
    );
  }
}
