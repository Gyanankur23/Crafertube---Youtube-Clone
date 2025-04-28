import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "var(--primary-blue)", padding: "20px" }}>
      <nav aria-label="Sidebar navigation">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/" aria-label="Navigate to Home">Home</Link></li>
          <li><Link to="/upload" aria-label="Navigate to Upload">Upload</Link></li>
          <li><Link to="/profile" aria-label="Navigate to Profile">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
