import React, { Component } from "react";
import { ReactLogo } from "../../assets/images";

class Hello extends Component {
  render() {
    return(
      <div>
        <h4>Hello from React</h4>
        <img src={ReactLogo} alt="logo" />
      </div>
    );
  }
}
export default Hello;
