import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

class Main extends Component {
  render() {
    const Sticky = this.props.notes.map(function(notes) {
      return (
        <div>
          {notes.name},{notes.modified}
        </div>
      );
    });
    return (
      <div className="mainpage">
        {Sticky}
        <div>
          <Link to="/createnote">Add Note</Link>
        </div>
      </div>
    );
  }
}
export default Main;
