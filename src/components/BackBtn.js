import React from "react";
// import { browserHistory } from "react-router";

// export  const BackBtn = () => (
//   <div className="">
//     <button onClick={browserHistory.goBack}>Back</button>
//   </div>
// );
import { useHistory } from "react-router-dom";

function BackBtn(props) {
  let history = useHistory();

  function handleClick() {
    history.push(`${props.pathName}`);
    // window.scrollTo({ top: `${props.top}`, left: "500", behavior: "smooth" });
    // window.scrollTo({ behavior: "smooth" });
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
export default BackBtn;
