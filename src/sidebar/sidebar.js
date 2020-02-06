import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import PropTypes from "prop-types";

class Sidebar extends Component {
  render() {
    const Folders = this.props.folders.map(folder => {
      console.log(folder);
      return (
        <li>
          <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
        </li>
      );
    });

    return (
      <div>
        {Folders}
        <Link to="/createfolder"> Add Folder</Link>
      </div>
    );
  }
}
Sidebar.propTypes = {
  notes: PropTypes.array.isRequired,
  folders: PropTypes.array.isRequired
};
export default Sidebar;
