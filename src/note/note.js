import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./note.css";
import PropTypes from "prop-types";

function Note(props) {
  const notes = props.notes;
  const { id } = useParams();
  const Sticker = notes
    .filter(note => {
      return note.id === id;
    })
    .map(function(notes) {
      return (
        <div>
          {notes.name},{notes.content}
        </div>
      );
    });
  console.log({ id });
  return (
    <div className="notepage">
      {Sticker}
      <Link to="/">Go Back</Link>
    </div>
  );
}
Note.propTypes = {
  notes: PropTypes.array.isRequired
};
export default Note;
