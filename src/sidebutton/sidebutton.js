import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebutton.css";

class SideButton extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}
export default SideButton;
