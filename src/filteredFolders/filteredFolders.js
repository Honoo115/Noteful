import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Folder(props) {
  const notes = props.notes;
  const { folderId } = useParams();
  const FilterNotes = notes
    .filter(note => {
      return note.folderId === folderId;
    })
    .map(function(notes) {
      return (
        <div>
          <Link to={`note/${notes.id}`}>
            {notes.name},{notes.modified}
          </Link>
        </div>
      );
    });

  return (
    <div className="folder">
      {FilterNotes}
      <Link to="/createnote">Add Note</Link>
    </div>
  );
}
export default Folder;
