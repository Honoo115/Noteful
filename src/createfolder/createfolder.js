import React, { Component } from "react";
import Store from "../store/dummy-store";
import uuid from "uuid/v4";
import "./createfolder.css";

class CreateFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: ""
      }
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("in event", event.target);
    Store.folders.push({
      name: this.state.name.value,
      id: uuid()
    });
  }
  updateName(name) {
    this.setState({ name: { value: name } });
  }
  render() {
    return (
      <div>
        <h2>Create a Folder</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label for="folder-name-input">Name</label>
          <input
            type="text"
            id="folder-name-input"
            onChange={e => this.updateName(e.target.value)}
          ></input>
          <div>
            <button className="buttons" type="submit">
              Add Folder
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateFolder;
