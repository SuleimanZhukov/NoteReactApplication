import React from "react";
import Category from "./common/category";
import "../styles/navbar.css";

function NavBar(props) {
  return (
    <nav className="navbar" style={{ width: "20%", paddingTop: "20px" }}>
      <ul className="list">
        <li>
          <Category title={"CATEGORIES"} />
        </li>
        <li>
          <Category title={"TAGS"} />
        </li>
        <li>
          <Category title={"COLORS"} />
        </li>
        <li>
          <Category title={"TRASH"} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
