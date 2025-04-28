import React from "react";
import VideoCard from "./VideoCard";
import thumb from "../assets/thumb1.jpg"; // You can add some thumbnail images

function VideoGrid() {
  const videos = [
    { title: "First CrafterTube Video", channel: "CrafterChannel", thumbnail: thumb },
    { title: "Awesome Tutorial", channel: "LearnWithMe", thumbnail: thumb },
    { title: "React Basics", channel: "DevCrafter", thumbnail: thumb },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default VideoGrid;
