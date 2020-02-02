import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

class Sidebar extends Component {
  render() {
    const Temporary = this.props.folders.map(function(folders) {
      return <div className="sidebar_folder">{folders.name}</div>;
    });
    return (
      <div>
        {Temporary}
        <Link to="/createfolder"> Add Folder</Link>
      </div>
    );
    // return (
    //   <div className="sidebar">
    //     <div className="sidebar_folder">Folder 1</div>
    //     <div className="sidebar_folder">Folder 2</div>
    //     <div className="sidebar_folder">Folder 3</div>
    //     <div className="add">Add Folder</div>
    //   </div>
    // );
  }
}
export default Sidebar;
