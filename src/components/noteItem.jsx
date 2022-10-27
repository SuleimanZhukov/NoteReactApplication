import React from "react";

const NoteItem = () => {
  return (
    <div className="note">
      <div className="ze-line" />
      <div className="smaller-circle" />
      <p className="category-item">General</p>
      <p className="date">24/03/2022</p>
      <h4 className="title-item">Title of an item</h4>
      <p className="text-item">Paragraph</p>
    </div>
  );
};

export default NoteItem;
