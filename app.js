import React from "react";
import ReactDOM from "react-dom";

// import AppRouter from "./src/router/Router";
// ReactDOM.render(<AppRouter />, document.querySelector("#container"));
import AppRouter from "./src/router/Router";
// import Loading from "./loading";git 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  render() {
    // return this.state.isLoading ? <Loading /> : <AppRouter />;
    return <AppRouter />
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
