import React from "react";

function Button({ label, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        background: "var(--secondary-orange)",
        color: "var(--text-light)",
        cursor: "pointer",
        ...style,
      }}
    >
      {label}
    </button>
  );
}

export default Button;
