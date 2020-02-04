import React, { Component } from "react";
import Store from "../store/dummy-store";
import "./createnote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: ""
      },
      content: {
        value: ""
      },
      folder: {
        value: ""
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Name: ", event.target.value.name);
    console.log("Content: ", event.target.value.content);
    console.log("Folder: ", event.target.value.folder);
    Store.notes.push({
      name: event.target.value,
      content: event.target.value,
      folder: event.target.value
    });
  }
  updateName(name) {
    this.setState({ name: { value: name } });
  }

  updateContent(content) {
    this.setState({ content: { value: content } });
  }

  updateFolder(folder) {
    this.setState({ folder: { value: folder } });
  }

  render() {
    const Options = this.props.folders.map(function(folders) {
      return <option value={folders.id}>{folders.name}</option>;
    });
    return (
      <div>
        <h2>Create a Note</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="field">
            <label for="note-name-input">Name</label>
            <input
              type="text"
              id="note-name-input"
              onChange={e => this.updateName(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label for="note-content-input">Content</label>
            <textarea
              id="note-content-input"
              onChange={e => this.updateContent(e.target.value)}
            ></textarea>
            <div className="field">
              <label for="note-folder-select">Folder</label>
              <select
                id="note-folder-select"
                onChange={e => this.updateFolder(e.target.value)}
              >
                {Options}
              </select>
              <div>
                <button className="buttons" type="submit">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateNote;
