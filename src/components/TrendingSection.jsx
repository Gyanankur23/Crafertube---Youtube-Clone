import React from "react";
import VideoCard from "./VideoCard";

function TrendingSection({ videos }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ color: "var(--secondary-orange)", fontSize: "24px", marginBottom: "20px" }}>Trending Now</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
