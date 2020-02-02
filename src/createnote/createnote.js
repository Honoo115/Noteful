import React, { Component } from "react";
import "./createnote.css";

class CreateNote extends Component {
  render() {
    const Options = this.props.folders.map(function(folders) {
      return <option value={folders.id}>{folders.name}</option>;
    });
    return (
      <div>
        <h2>Create a Note</h2>
        <form>
          <div className="field">
            <label for="note-name-input">Name</label>
            <input type="text" id="note-name-input"></input>
          </div>
          <div className="field">
            <label for="note-content-input">Content</label>
            <textarea id="note-content-input"></textarea>
            <div className="field">
              <label for="note-folder-select">Folder</label>
              <select id="note-folder-select">{Options}</select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateNote;
