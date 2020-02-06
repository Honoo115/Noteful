import React, { Component } from "react";
import config from "../config";
import { withRouter } from "react-router";
import uuid from "uuid/v4";
import "./createnote.css";
import PropTypes from "prop-types";

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
    console.log("in event", event.target);
    const warehouse = {
      name: this.state.name.value,
      id: uuid(),
      content: this.state.content.value,
      folderId: this.state.folder.value,
      modified: new Date().toLocaleDateString()
    };
    const url = `${config.API_ENDPOINT}/notes`;
    const options = {
      method: "POST",
      body: JSON.stringify(warehouse),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.props.AddNote(data);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
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
              required
            ></input>
          </div>
          <div className="field">
            <label for="note-content-input">Content</label>
            <textarea
              id="note-content-input"
              onChange={e => this.updateContent(e.target.value)}
              required
            ></textarea>
            <div className="field">
              <label for="note-folder-select">Folder</label>
              <select
                id="note-folder-select"
                onChange={e => this.updateFolder(e.target.value)}
              >
                {" "}
                <option>Please Select a Folder</option>
                {Options}
              </select>
              <div>
                <button
                  disabled={!this.state.folder.value}
                  className="buttons"
                  type="submit"
                >
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
CreateNote.propTypes = {
  folders: PropTypes.array.isRequired,
  AddNote: PropTypes.func.isRequired
};
export default withRouter(CreateNote);
