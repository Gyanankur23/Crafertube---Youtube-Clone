import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ id, thumbnail, title, channel, views, timestamp, duration }) {
  return (
    <Link to={`/video/${id}`} style={{ textDecoration: 'none' }}>
      <div className="video-card" style={{ 
        backgroundColor: "#1e293b", 
        padding: "10px", 
        borderRadius: "10px", 
        margin: "10px", 
        width: "280px",
        cursor: "pointer",
        transition: "transform 0.2s"
      }}>
        <div style={{ position: "relative" }}>
          <img src={thumbnail} alt="Thumbnail" style={{ 
            width: "100%", 
            borderRadius: "10px",
            aspectRatio: "16/9",
            objectFit: "cover"
          }} />
          <span style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px"
          }}>
            {duration}
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h3 style={{ 
            margin: "0 0 5px", 
            fontSize: "14px", 
            color: "var(--text-light, #f1f5f9)",
            fontWeight: "600",
            lineHeight: "1.3",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>{title}</h3>
          <p style={{ 
            margin: "0", 
            fontSize: "12px", 
            color: "var(--secondary-orange, #ff6b35)",
            fontWeight: "500"
          }}>{channel}</p>
          <p style={{ 
            margin: "0", 
            fontSize: "12px", 
            color: "var(--text-secondary, #94a3b8)"
          }}>{views} • {timestamp}</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
