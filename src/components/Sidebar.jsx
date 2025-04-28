import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "var(--primary-blue)", padding: "20px" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
