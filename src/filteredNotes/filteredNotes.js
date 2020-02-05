import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FilteredNote(props) {
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
export default FilteredNote;
