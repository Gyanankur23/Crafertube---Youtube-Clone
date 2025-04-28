import React from "react";

function UserAvatar({ name, avatarUrl }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={avatarUrl}
        alt={`${name}'s Avatar`}
        style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
      />
      <span style={{ color: "var(--text-light)", fontSize: "16px" }}>{name}</span>
    </div>
  );
}

export default UserAvatar;
