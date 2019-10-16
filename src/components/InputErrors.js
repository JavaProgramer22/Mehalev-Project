import React from 'react';

// export default class InputErrors extends React.Component {
//     render(){
//         return (
//             this.props.errors.map((error, i) => {
//                 return <span key={i} className="form-text text-danger">{error}</span>
//             })
//         );
//     }
// }

//If the class only returns JSX, convert it to Function Component:

const InputErrors = (props) => {
    return (
        props.errors.map((error, i) => {
            return <span key={i} className="form-text text-danger">{error}</span>
        })
    );
}

export default InputErrors;