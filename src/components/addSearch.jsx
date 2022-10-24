import React from "react";

const AddSearch = () => {
  return (
    <div className="search-form">
      <input type="text" name="search" placeholder="Search Notes..." />
      <button className="add-note-button">+ ADD NOTE</button>
    </div>
  );
};

export default AddSearch;
