import React, { Component } from "react";
import Header from "../header/header";
import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="flexbox">
        <Header />
        <div className="content"> {this.props.children} </div>
      </div>
    );
  }
}
export default Layout;
