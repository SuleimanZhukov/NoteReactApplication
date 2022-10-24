import React from "react";

const TitleSection = (props) => {
  return (
    <div className="title-section">
      <a className="title">General</a>
      <img className="rename-icon" src={require("../images/arrow_loop.png")} />
    </div>
  );
};

export default TitleSection;
