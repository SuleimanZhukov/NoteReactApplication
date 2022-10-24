import React from "react";
import AddSearch from "./addSearch";
import TitleSection from "./titleSection";
import "../styles/noteSection.css";

const NoteSection = (props) => {
  return (
    <div className="note-section">
      <div>
        <TitleSection />
      </div>
      <div>
        <AddSearch />
      </div>
    </div>
  );
};

export default NoteSection;
