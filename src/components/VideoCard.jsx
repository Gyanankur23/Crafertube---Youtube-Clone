import React from "react";

function VideoCard({ thumbnail, title, channel }) {
  return (
    <div style={{ backgroundColor: "#1e293b", padding: "10px", borderRadius: "10px", margin: "10px", width: "250px" }}>
      <img src={thumbnail} alt="Thumbnail" style={{ width: "100%", borderRadius: "10px" }} />
      <h3 style={{ margin: "10px 0 5px", fontSize: "16px", color: "var(--text-light)" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "12px", color: "var(--secondary-orange)" }}>{channel}</p>
    </div>
  );
}

export default VideoCard;
