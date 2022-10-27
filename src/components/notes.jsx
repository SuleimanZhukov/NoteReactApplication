import React from "react";
import NoteItem from "./noteItem";

const Notes = (props) => {
  return (
    <div className="wrapper">
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default Notes;
