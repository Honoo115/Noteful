import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./main.css";

function Main(props) {
  const { id } = useParams();
  const Sticky = props.notes.map(function(notes) {
    return (
      <div>
        <Link to={`note/${notes.id}`}>
          {notes.name},{notes.modified}
        </Link>
      </div>
    );
  });
  return (
    <div className="mainpage">
      {Sticky}
      <div>
        <Link to="/createnote">Add Note</Link>
      </div>
    </div>
  );
}
export default Main;
