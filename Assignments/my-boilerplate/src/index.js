import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

import './index.scss';

class HelloMessage extends React.Component {
  render() {
    return (
      <>
        <div>Hellooooo!!!!! {this.props.name}</div>
        <Button />
      </>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);

const patrick = { name: "patrick" };
