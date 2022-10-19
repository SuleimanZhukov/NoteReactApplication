import React from "react";
import "../App.css";

function NavBar(props) {
  return (
    <nav className="navbar" style={{ width: "25%", paddingTop: "20px" }}>
      <ul>
        <li>
          <a href="/categories">CATEGORIES</a>
        </li>
        <li>
          <a href="/tags">TAGS</a>
        </li>
        <li>
          <a href="/colors">COLORS</a>
        </li>
        <li>
          <a href="/trash">TRASH</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
