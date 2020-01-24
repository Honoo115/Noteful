import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>
          Noteful
          <br />
          File Manager
        </h1>
        <p>
          <em>
            A lion does not concern themsleves with the opionion of the sheep
          </em>
        </p>
      </div>
    );
  }
}
