import React from "react";

function Footer() {
  return (
    <footer style={{ background: "var(--primary-blue)", color: "var(--text-light)", padding: "20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} CrafterTube. All rights reserved.</p>
      <nav>
        <a href="/" style={{ color: "var(--secondary-orange)", margin: "0 10px" }}>
          Home
        </a>
        <a href="/about" style={{ color: "var(--secondary-orange)", margin: "0 10px" }}>
          About
        </a>
        <a href="/contact" style={{ color: "var(--secondary-orange)", margin: "0 10px" }}>
          Contact
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
