import React from "react";
import VideoCard from "./VideoCard";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import thumb4 from "../assets/thumb4.jpg";
import thumb5 from "../assets/thumb5.jpg";
import thumb6 from "../assets/thumb6.jpg";
import thumb7 from "../assets/thumb7.jpg";
import thumb8 from "../assets/thumb8.jpg";
import thumb9 from "../assets/thumb9.jpg";
import thumb10 from "../assets/thumb10.jpg";
import thumb11 from "../assets/thumb11.jpg";
import thumb12 from "../assets/thumb12.jpg";
import thumb13 from "../assets/thumb13.jpg";
import thumb14 from "../assets/thumb14.jpg";
import thumb15 from "../assets/thumb15.jpg";
import thumb16 from "../assets/thumb16.jpg";
import thumb17 from "../assets/thumb17.jpg";
import thumb18 from "../assets/thumb18.jpg";
import thumb19 from "../assets/thumb19.jpg";
import thumb20 from "../assets/thumb20.jpg"

function VideoGrid() {
  const videos = [
    { 
      id: "1",
      title: "First CrafterTube Video", 
      channel: "CrafterChannel", 
      thumbnail: thumb1,
      videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      views: "1.2M views",
      timestamp: "2 days ago",
      duration: "10:23"
    },
    { 
      id: "2",
      title: "Awesome Tutorial", 
      channel: "LearnWithMe", 
      thumbnail: thumb2,
      videoUrl: "https://www.youtube.com/embed/wnHW6o8WMas",
      views: "850K views",
      timestamp: "1 week ago",
      duration: "15:45"
    },
    { 
      id: "3",
      title: "React Basics", 
      channel: "DevCrafter", 
      thumbnail: thumb3,
      videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
      views: "2.5M views",
      timestamp: "3 days ago",
      duration: "22:10"
    },
    { 
      id: "4",
      title: "JavaScript Advanced Concepts", 
      channel: "CodeMaster", 
      thumbnail: thumb4,
      videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
      views: "500K views",
      timestamp: "5 days ago",
      duration: "18:30"
    },
    { 
      id: "5",
      title: "CSS Grid Layout Tutorial", 
      channel: "DesignPro", 
      thumbnail: thumb5,
      videoUrl: "https://www.youtube.com/embed/txEw49Xbezo",
      views: "300K views",
      timestamp: "2 weeks ago",
      duration: "12:15"
    },
    { 
      id: "6",
      title: "Node.js Backend Development", 
      channel: "BackendGuru", 
      thumbnail: thumb6,
      videoUrl: "https://www.youtube.com/embed/Oe421IPeIwI",
      views: "750K views",
      timestamp: "1 month ago",
      duration: "25:45"
    },
    { 
      id: "7",
      title: "MongoDB Database Design", 
      channel: "DataExpert", 
      thumbnail: thumb7,
      videoUrl: "https://www.youtube.com/embed/ofme2o29ngU",
      views: "420K views",
      timestamp: "3 weeks ago",
      duration: "20:10"
    },
    { 
      id: "8",
      title: "React Hooks Deep Dive", 
      channel: "ReactNinja", 
      thumbnail: thumb8,
      videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
      views: "1.8M views",
      timestamp: "4 days ago",
      duration: "35:20"
    },
    { 
      id: "9",
      title: "Web Performance Optimization", 
      channel: "SpeedMaster", 
      thumbnail: thumb9,
      videoUrl: "https://www.youtube.com/embed/cHggPvXe67I",
      views: "650K views",
      timestamp: "1 week ago",
      duration: "28:15"
    },
    { 
      id: "10",
      title: "TypeScript Fundamentals", 
      channel: "TypeScriptPro", 
      thumbnail: thumb10,
      videoUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
      views: "920K views",
      timestamp: "6 days ago",
      duration: "30:45"
    },
    { 
      id: "11",
      title: "Docker Containerization", 
      channel: "DevOpsWizard", 
      thumbnail: thumb11,
      videoUrl: "https://www.youtube.com/embed/3c-iBn71dDE",
      views: "380K views",
      timestamp: "2 weeks ago",
      duration: "22:30"
    },
    { 
      id: "12",
      title: "GraphQL API Design", 
      channel: "APIMaster", 
      thumbnail: thumb12,
      videoUrl: "https://www.youtube.com/embed/MBazJ2aTg6w",
      views: "560K views",
      timestamp: "10 days ago",
      duration: "26:40"
    },
    { 
      id: "13",
      title: "Vue.js vs React Comparison", 
      channel: "FrameworkFighter", 
      thumbnail: thumb13,
      videoUrl: "https://www.youtube.com/embed/Ujp-nPS2QOQ",
      views: "1.1M views",
      timestamp: "3 days ago",
      duration: "18:55"
    },
    { 
      id: "14",
      title: "Python Web Development", 
      channel: "PythonPro", 
      thumbnail: thumb14,
      videoUrl: "https://www.youtube.com/embed/xvFZjo5PkG0",
      views: "780K views",
      timestamp: "1 week ago",
      duration: "32:20"
    },
    { 
      id: "15",
      title: "AWS Cloud Services", 
      channel: "CloudExpert", 
      thumbnail: thumb15,
      videoUrl: "https://www.youtube.com/embed/a9__D53Wsus",
      views: "890K views",
      timestamp: "5 days ago",
      duration: "40:15"
    },
    { 
      id: "16",
      title: "Machine Learning Basics", 
      channel: "MLGenius", 
      thumbnail: thumb16,
      videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
      views: "2.2M views",
      timestamp: "2 weeks ago",
      duration: "45:30"
    },
    { 
      id: "17",
      title: "Git Advanced Techniques", 
      channel: "GitMaster", 
      thumbnail: thumb17,
      videoUrl: "https://www.youtube.com/embed/GOiI74K9BrM",
      views: "440K views",
      timestamp: "4 days ago",
      duration: "24:10"
    },
    { 
      id: "18",
      title: "CSS Animations Tutorial", 
      channel: "AnimationPro", 
      thumbnail: thumb18,
      videoUrl: "https://www.youtube.com/embed/L_gDCrKgJLE",
      views: "670K views",
      timestamp: "1 week ago",
      duration: "19:25"
    },
    { 
      id: "19",
      title: "REST API Best Practices", 
      channel: "BackendPro", 
      thumbnail: thumb19,
      videoUrl: "https://www.youtube.com/embed/Q-Bpqy9gqnM",
      views: "520K views",
      timestamp: "6 days ago",
      duration: "27:50"
    },
    { 
      id: "20",
      title: "Mobile App Development", 
      channel: "MobileDev", 
      thumbnail: thumb20,
      videoUrl: "https://www.youtube.com/embed/mkEmsaTjhQc",
      views: "1.5M views",
      timestamp: "2 weeks ago",
      duration: "38:40"
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", height: "100vh", overflowY: "auto" }}>
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default VideoGrid;
