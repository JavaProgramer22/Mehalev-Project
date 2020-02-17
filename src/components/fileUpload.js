import React from "react";

// export default class fileUpload extends React.Component {
//   constructor() {
//     super();
//     // let fileExtenstion= this.props.fileEnd;
//     this.state = {
//       file: {
//         value: "",
//         errors: [],
//         validations: { required: true, fileEnd: true },
//         option: ""
//       }
//     };
//   }
// }
const fileUpload = props => {
  return (
    <>
      <div className="form-group ">
        <label>
          <h6>{props.name}</h6>
        </label>
        <div className="custom-file">
          <input
            type="file"
            name={`${props.name}`}
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            onChange={e => this.handlefile(e)}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            // name="inlineRadioOptions"
            name={`${props.groupID}`}
            id={`${props.groupID}`}
            value="option1"
          />
          <label className="form-check-label" htmlFor={`${props.groupID}`}>
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={`${props.groupID}`}
            id={`${props.groupID}` + 1}
            value="option2"
          />
          <label className="form-check-label" htmlFor={`${props.groupID}` + 1}>
            2
          </label>
        </div>
      </div>
    </>
  );
};

export default fileUpload;
