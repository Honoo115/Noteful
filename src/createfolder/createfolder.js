import React, { Component } from "react";

import "./createfolder.css";

class CreateFolder extends Component {
  render() {
    return (
      <div>
        <h2>Create a Folder</h2>
        <label for="folder-name-input">Name</label>
        <input type="text" id="folder-name-input"></input>
        <div>
          <button className="buttons" type="submit">
            Add Folder
          </button>
        </div>
      </div>
    );
  }
}
export default CreateFolder;
