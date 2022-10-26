import React from "react";

const AddSearch = (props) => {
  return (
    <div className="search-form">
      <input
        className="input-search"
        type="text"
        name="search"
        placeholder="Search Notes..."
      />
      <button className="add-note-button">+ ADD NOTE</button>
    </div>
  );
};

export default AddSearch;
