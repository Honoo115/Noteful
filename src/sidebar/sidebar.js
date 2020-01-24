import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="folder">Folder 1</div>
        <div className="folder">Folder 2</div>
        <div className="folder">Folder 3</div>
        <div className="addfolder">Add Folder</div>
      </div>
    );
  }
}
export default Sidebar;
