import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "var(--background-black)";
    document.body.style.color = darkMode ? "#000000" : "var(--text-light)";
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        padding: "10px",
        background: "var(--primary-blue)",
        color: "var(--text-light)",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
