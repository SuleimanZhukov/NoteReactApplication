import React from "react";
import Category from "./category";
import Profile from "./profile";
import "../styles/navbar.css";

function NavBar(props) {
  return (
    <nav className="navbar">
      <Profile />
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
