import React, { Component } from "react";
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
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, content } = this.state;
    console.log("Name: ", name.value);
    console.log("Content: ", content.value);
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
        <form>
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
            <textarea id="note-content-input"></textarea>
            <div className="field">
              <label for="note-folder-select">Folder</label>
              <select id="note-folder-select">{Options}</select>
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
