import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import config from "../config";
import uuid from "uuid/v4";
import "./createfolder.css";
import Main from "../main/main";

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
    const warehouse = {
      name: this.state.name.value,
      id: uuid()
    };
    const url = `${config.API_ENDPOINT}/folders`;
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
        this.props.AddFolder(data);
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
            required
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
CreateFolder.propTypes = {
  folders: PropTypes.array.isRequired,
  AddFolder: PropTypes.func.isRequired
};
export default withRouter(CreateFolder);
