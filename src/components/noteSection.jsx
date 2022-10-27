import React from "react";
import AddSearch from "./addSearch";
import TitleSection from "./titleSection";
import "../styles/noteSection.css";
import Notes from "./notes";

const NoteSection = (props) => {
  return (
    <div className="note-section">
      <div>
        <TitleSection />
      </div>
      <div>
        <AddSearch />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default NoteSection;
