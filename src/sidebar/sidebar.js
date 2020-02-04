import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
    const Folders = this.props.folders.map(folder => (
      <li>
        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
      </li>
    ));

    return (
      <div>
        {Folders}
        <Link to="/createfolder"> Add Folder</Link>
      </div>
    );
  }
}
export default Sidebar;
