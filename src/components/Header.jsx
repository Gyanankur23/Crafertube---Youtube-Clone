import React from "react";

function Header() {
  return (
    <header style={{ background: "var(--primary-blue)", padding: "10px 20px", display: "flex", alignItems: "center" }}>
      <h1 style={{ margin: 0, fontSize: "24px", color: "var(--text-light)" }}>CrafterTube</h1>
    </header>
  );
}

export default Header;
