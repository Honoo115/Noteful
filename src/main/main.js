import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import PropTypes from "prop-types";

function Main(props) {
  const Sticky = props.notes.map(function(notes) {
    return (
      <div>
        <Link to={`note/${notes.id}`}>
          {notes.name},{notes.modified}
        </Link>
        <button onClick={() => props.onDeleteNote(notes.id)}>DELETE</button>
      </div>
    );
  });
  return <div className="mainpage">{Sticky}</div>;
}
Main.propTypes = {
  notes: PropTypes.array.isRequired,
  onDeleteNote: PropTypes.func.isRequired
};
export default Main;
