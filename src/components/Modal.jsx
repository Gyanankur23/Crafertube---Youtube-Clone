import React from "react";

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "var(--background-black)",
          padding: "20px",
          borderRadius: "10px",
          width: "80%",
          maxWidth: "500px",
          color: "var(--text-light)",
        }}
      >
        {content}
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "var(--secondary-orange)",
            border: "none",
            color: "var(--text-light)",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
